import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../admin-data.service';
import { Subscription } from 'rxjs';
import { ScheduleService } from 'src/app/schedule/schedule.service';
import { ActivatedRoute } from '@angular/router';
import { ILecture } from 'src/app/models/lecture';
import { TeachersService } from 'src/app/teachers/teachers.service';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.css'],
})
export class CourseEditorComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  public currentCourse: ILecture;
  public success: boolean = false;
  public id: number = 0;

  constructor(
    public adminDataService: AdminDataService,
    private scheduleService: ScheduleService,
    private route: ActivatedRoute,
    public teachersService: TeachersService,
  ) {}

  ngOnInit(): void {
    this.teachersService.getTeachers();

    this.id = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
    if (!this.adminDataService.lectures.length) {
      this.loadCourses();
    } else {
      this.setCurrentCourse();
      if(!this.currentCourse){
        this.loadCourses();
      }
    }
  }

  loadCourses(){
    this.subscriptions.push(
      this.scheduleService
        .getLecturesData()
        .subscribe((lecturesData: any) => {
          this.adminDataService.lectures = lecturesData;
          this.setCurrentCourse();
        })
    );
  }

  setCurrentCourse(){
    let foundCourse = this.adminDataService.lectures.find(x => x.id == this.id);
    if(foundCourse){
      this.currentCourse = foundCourse;
    }
  }

  save(){
    this.scheduleService.updateLecture(this.currentCourse).subscribe((data)=>{
      if(data){
        this.success = true;
      }
    });
  }

  onSelectTeacher(event: any) {
    this.currentCourse.teacherId = Number(event.target.value);
  }
}
