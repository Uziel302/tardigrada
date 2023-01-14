import { Component, OnInit } from '@angular/core';
import { IManager } from '../models/manager';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  rows: IManager[][] = [
    [
      {name:'соня велле',title:'директор и сооснователь',about:`
      Закончила биологический факультет СПБГУ, кафедру зоологии беспозвоночных и магистратуру Института Искусств в Лондоне по специальности «Нарративные пространства».

      Работала в детских образовательных проектах, преподавала, делала олимпиады, научные конференции для подростков и возила детей в экспедиции. Рисую, пишу книжки и еще всякое.

      Хожу под парусом и видела паковый лед с двух сторон земного шара.

      Я сооснователь Блуждающей Тардиграды. Почему мы ее сделали? Ну кто-то же должен был..
      `,photo:'',background:'#ee9631',isLong: true},
      {name:'Аня зиндер',title:'сооснователь',about:`
      Выпускница ЛГУ, отделение математической лингвистики. Математика со временем отвалилась, лингвистика выжила. В 1993 году нечаянно попала в учителя. И вдруг выяснилось, что это работа мечты. Проработала в Аничковом лицее 30 лет без двух месяцев. 

      Еще люблю переводить интересное. Люблю показывать и обсуждать кино.
      `,photo:'',background:'#71284b',isLong: false},
      {name:'юля сорин',title:'дизайнер',about:`
      Много чем занималась, танцы,  фотограия,  акро йога..

      В Тардиграде с самого начала...
      `,photo:'',background:'#22504e',isLong: false},
    ],
    [
      {name:'',title:'',about:``,photo:'',background:'',isLong: false},
      {name:'',title:'',about:``,photo:'',background:'',isLong: false},
      {name:'',title:'',about:``,photo:'',background:'',isLong: true},
    ],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
