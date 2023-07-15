import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ICourse } from '../models/course';
import { environment } from '../../environments/environment';
import { ScheduleService } from '../schedule/schedule.service';
import { IReview } from '../models/review';
import { LoginService } from '../login-screen/login.service';
import { DonationService } from '../donation/donation.service';

@Component({
  selector: 'app-lecture-page',
  templateUrl: './lecture-page.component.html',
  styleUrls: ['./lecture-page.component.css'],
})
export class LecturePageComponent implements OnInit {
  public stars: number = 0;
  public newStars: number = 0;
  public totalReviews: number = 0;
  public id: number = 0;
  public heartClicked: boolean[] = [];
  public course: ICourse = {
    title: '',
    subtitle: '',
    teacher: '',
    profile: '',
    day: 0,
    hour: 0,
    minutes: 0,
    minAge: 0,
    maxAge: 0,
    level: '',
    image: '',
    about: '',
    description: '',
    longDescription: '',
    bullets: '',
    background: '',
  };
  //todo: move reviews to separate component
  public reviews: IReview[] = [];
  public newReview: string = '';
  public showPopup: boolean = false;
  public isPaying: boolean = false;
  public isLoggedWarning: boolean = false;
  public showPayment: boolean = false;
  public showLongDescription: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public scheduleService: ScheduleService,
    public loginService: LoginService,
    public donationService: DonationService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
    this.getCourseDetails();
    this.getReviews();
  }

  getCourseDetails() {
    this.http
      .get<ICourse>(environment.apiEndPoint + 'course/?id=' + this.id)
      .subscribe(
        (data) => {
          this.course = data;
        },
        (error) => {}
      );
  }

  getReviews() {
    this.http
      .get<any[]>(environment.apiEndPoint + 'reviews/?id=' + this.id)
      .subscribe(
        (data) => {
          for (let review of data) {
            let likers = JSON.parse(review.likers);
            this.reviews.push({
              id: review.id,
              name: review.name,
              stars: review.stars,
              date: this.formatDate(review.creation),
              content: review.content,
              count: likers.length,
              likers: likers,
            });
            this.heartClicked[this.reviews.length - 1] = likers.includes(
              this.loginService.connectedChildId
            );
          }
        },
        (error) => {}
      );
  }

  formatDate(date: string): string {
    let dateObj = new Date(date);
    return (
      dateObj.getDate() +
      '.' +
      (dateObj.getMonth() + 1) +
      '.' +
      dateObj.getFullYear()
    );
  }

  submitReview() {
    if (!this.newStars) {
      return;
    }
    const reviewData: any = {
      childId: this.loginService.connectedChildId,
      lectureId: this.id,
      content: this.newReview,
      stars: this.newStars,
    };
    this.http
      .post<{ id: number; name: string }>(
        environment.apiEndPoint + 'submitReview',
        reviewData
      )
      .subscribe(
        (data) => {
          this.reviews.push({
            id: data.id,
            name: data.name,
            stars: this.newStars,
            date: this.formatDate(new Date() + ''),
            content: this.newReview,
            count: 0,
            likers: [],
          });
          this.newReview = '';
          this.newStars = 0;
        },
        (error) => {}
      );
  }

  changeHeart(index: number) {
    if (!this.loginService.connectedChildId) {
      return;
    }
    this.heartClicked[index] = !this.heartClicked[index];
    if (this.reviews[index].likers.includes(this.loginService.connectedChildId)) {
      this.reviews[index].likers.splice(
        this.reviews[index].likers.indexOf(this.loginService.connectedChildId),
        1
      );
      this.reviews[index].count--;
    } else {
      this.reviews[index].likers.push(this.loginService.connectedChildId);
      this.reviews[index].count++;
    }
    let likeData = {
      id: this.reviews[index].id,
      likers: JSON.stringify(this.reviews[index].likers),
    };
    this.http.post(environment.apiEndPoint + 'submitLike', likeData).subscribe(
      (data) => {},
      (error) => {}
    );
  }

  pay(){
    if(this.checkLogged()){
      this.showPayment = true;
      this.donationService.loadPaypalScript().then(() => {
        this.donationService.renderButtons();
      });

    }
  }

  @HostListener("window:click")
  popupIfPaid() {
    let element = document.getElementById('paypal-button') as HTMLElement;
    if(element.innerHTML == '<h3>Thank you for your payment!</h3>'){
      this.showPayment = false;
      this.isPaying = true;
      this.showPopup = true;
      this.scheduleService.joinLecture(
        this.id,
        this.loginService.connectedChildId
      );
      this.scheduleService.childLectures[this.id] = true;
    }
  }

  skipPaying(){
    if(this.checkLogged()){
      this.isPaying = false;
      this.showPopup = true;
    }
  }

  checkLogged(){
    this.isLoggedWarning = !this.loginService.connectedChildId;
    return !this.isLoggedWarning;
  }
}
