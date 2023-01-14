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
      {name:'асаф малин',title:'программист',about:`
      Асаф родился и вырос в Иерусалиме, закончил школу с отличием и три года проучился в Иешиве и занимался изучением старинных текстов на иврите и армейском. Служил в израильской армии, сейчас занимается веб-программированием.

      В тардиграде занимается программированием школьного веб-сайт и ведет разговорный клуб на иврите.
      `,photo:'',background:'#886380',isLong: false},
      {name:'лиза дроздовская',title:'завуч',about:`
      В Тардиграде завуч! Работаю в российской правозащите и занимаюсь лингвистикой (СПбГУ). Ещё я очень люблю шоколад и много о нём знаю! 

      Для меня важно, чтобы никто не оставался большом мире один. Тардиграда — место, где можно найти приют, когда вокруг всё чужое, и мне очень важно, чтобы такое место было — поэтому я тут.
      `,photo:'',background:'#a75722',isLong: false},
      {name:'елена соловьева',title:'менеджер проекта',about:`
      В Тардиграде я менеджер проекта. Помогаю команде эффективно двигаться к своим целям. 

      Последние 12 лет управляю различными проектами от международных регат до  создания музейной экспозиции. 
      
      Фан-факт обо мне: я ходила в кругосветное путешествие на яхте вокруг Северного полюса. 
      
      Многое обо мне говорят наличие у меня мотоцикла и мои занятия боксом. Интересуюсь мышлением и прикладной психологией.
      
      Я верю, что мы в силах менять реальность вокруг себя, и Тардиграда - это мой способ “to make the difference”.
      `,photo:'',background:'#1a394d',isLong: true},
    ],
    [
      {name:'анастасия насонкина',title:`звукорежиссерка подкаста 
      "Тардиграда на проводе"`,about:`
      Выпускница той самой 610 гимназии. Занималась и преподавала в ТЮТе. Закончила Кино и Телевидения и поступила в университет кино в Бабельсберге на звукорежиссуру. 

      Путешествую с рыжим мейн-куном по миру. В Хабаровске участвовала в научно-фантастическом спектакле-квесте для школьников. 

      Тардиграда - это место, где "ребенок - тоже человек".
      `,photo:'',background:'#564e56',isLong: true},
      {name:'андрей пихтин',title:'техническая поддержка',about:`
      В Тардиграде помогаю решать разные технические задачи. Учусь на лингвиста в НИУ ВШЭ, люблю изучать языки (говорю на английском и французском, еще учил немецкий и латынь), еще увлекаюсь скалолазанием. 

      Во всем, чем я занимаюсь, очень ценю людей, которые разделяют со мной увлечение. Наверное, именно поэтому рад быть частью Тардиграды.
      `,photo:'',background:'#9e7972',isLong: false},
      {name:'катрин берлин',title:'СММ администратор',about:`
      Я живу в Хайфе, параллельно заканчиваю школу в Петербурге. Собираюсь идти в армию, а потом поступать в один из университетов Израиля. В Тардиграде я принимаю участие в создании проектов и активностей в социальных сетях. 

      Мне  нравится, что Тардиграда предоставляет людям возможность учиться из любой точки мира, я вижу людей, которым интересно развиваться, а Тардиграда развивает этот интерес. Меня это очень вдохновляет.
      `,photo:'',background:'#716235',isLong: false},
    ]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
