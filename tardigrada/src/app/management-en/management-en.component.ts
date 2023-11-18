import { Component, OnInit } from '@angular/core';
import { IManager } from '../models/manager';

@Component({
  selector: 'app-management-en',
  templateUrl: './management-en.component.html',
  styleUrls: ['./management-en.component.css']
})
export class ManagementEnComponent implements OnInit {
  rows: IManager[][] = [
    [
      {name:'Sophya Welle',title:'Director and Co-founder',about:`
      I graduated from the Biological Faculty of Saint Petersburg State University, the Department of Invertebrate Zoology, and got my master's at the Institute of Art in London, specializing in 'Narrative Spaces.'

I have participated in various children's educational projects: I have taught, organized scientific olympiads and conferences for teenagers, and have taken children on expeditions. I draw, write books, and do many other things.

I sail and have seen drift ice on both sides of the globe.

I am a co-founder of the Nomadic Tardigrade. Why did we create it? Well, someone had to…
      `,photo:'assets/images/sonya.png',background:'#ee9631',isLong: true},
      {name:'Anya Zinder',title:'Co-founder',about:`
      I am a graduate of Leningrad State University, with a major in Mathematical Linguistics. Over time, mathematics fell by the wayside, while linguistics survived. In 1993, I inadvertently became a teacher. Suddenly, it turned out to be my dream job. I worked at the Anichkov Lyceum in St.-Petersburg, Russia, for 30 years, give or take two months.

I also enjoy translating interesting things. I love to screen and discuss films.
`,photo:'assets/uploads/00АннаЗиндер.jpeg',background:'#71284b',isLong: false},
      {name:'Julia Sorin',title:'Designer',about:`
      I have explored a wide array of interests, including dancing, photography, and acroyoga…

I have been with Tardigrade from the very beginning...
      `,photo:'assets/images/Юля_Сорин.jpeg',background:'#22504e',isLong: false},
    ],
    [
      {name:'Asaf Malin',title:'Programmer',about:`
      Asaf was born and raised in Jerusalem. He graduated from high-school with honors and spent the three following years studying in a Yeshiva, focusing on ancient texts in Hebrew and Arameic. He served in the Israeli army and is currently engaged in web programming.

At Tardigrade, he is involved in programming the school's website and leads a conversational club in Hebrew.
`,photo:'assets/images/Асаф_Малин.jpeg',background:'#886380',isLong: false},
      {name:'Liza Drozdovskaya',title:'Vice Principal',about:`
      At Tardigrade, I am the Vice Principal! I am involved in the field of human rights in Russia in addition to my work in linguistics at St.-Petersburg State University. I also have a great love for chocolate and possess considerable knowledge about it!

      It is important to me that no one is left alone in this big world. Tardigrade is a place where one can find shelter when everything seems unfamiliar, and it is essential to me that such a place exists — that's why I'm here.
            `,photo:'assets/images/Лиза_Дроздовская.jpeg',background:'#a75722',isLong: false},
      {name:'Elena Solovyeva',title:'Project Manager',about:`
      I am a project manager at Tardigrade. I help the team efficiently work towards their goals.

      For the past 12 years, I have been managing various projects, from international regattas to creating museum exhibitions.
      
      A fun fact about me: I have gone on a round-the-world trip on a yacht around the North Pole.
      
      My possession of a motorcycle and my involvement in boxing say a lot about me. I am interested in cognition and applied psychology.
      
      I believe that we are capable of changing the reality around us, and Tardigrade is my way to make a difference.
        `,photo:'assets/images/Лена_Соловтьва.jpeg',background:'#1a394d',isLong: true},
    ],
    [
      {name:'Anastasia Nasonkina',title:`Podcast Sound Engineer`,about:`
      A graduate of the infamous 610th Gymnasium. I studied and taught at the Youth Theater of Youth Creativity in St.-Petersburg, Russia. I completed my studies in Film and Television and was admitted to the Film University in Babelsberg for sound engineering.

I travel around the world with my ginger Maine Coon. In Khabarovsk, I participated in a science fiction theatrical quest for schoolchildren.

Tardigrade is a place where "a child is a person, too".
   `,photo:'assets/images/насонкина_анастасия.jpeg',background:'#564e56',isLong: true},
      {name:'Andrey Pikhtin',title:'Technical Support',about:`
      At Tardigrade, I help solve various technical issues. I am studying to become a linguist at the Higher School of Economics, and I enjoy studying languages (in addition to Russian, I speak English and French, and have also studied German and Latin). I am also passionate about rock climbing.

      In everything I do, I highly value people who share my interests. Perhaps that's why I am so glad to be a part of Tardigrade.
            `,photo:'assets/images/Андреи_Пихтин.jpeg',background:'#9e7972',isLong: false},
      {name:'Kathrin Berlin',title:'Social Media Manager',about:`
      I live in Haifa, while at the same time finishing school in St. Petersburg. I am planning to join the army and then apply to one of the universities in Israel. At Tardigrade, I take part in creating projects and activities on social media.

      I appreciate that Tardigrade provides people with the opportunity to learn from anywhere in the world. I see people who are interested in personal development, and Tardigrade fosters this interest. It inspires me greatly.
            `,photo:'assets/images/катрин_берлин.jpeg',background:'#716235',isLong: false},
    ]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
