import { Injectable } from '@angular/core';

import { ILecture } from '../models/lecture';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  
  public lessonsArray: ILecture[][][] = [[[{title:'',subtitle:'',teacher:'со ',hour:'9:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'9:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Математика',subtitle:'8-9 лет',teacher:'со Настя Коляда',hour:'10:00',minAge:'8',maxAge:'9',background:'#9D3848',url:'https://t.me/+YkyOyBDOHroxZDZi',},{title:'',subtitle:'',teacher:'со ',hour:'10:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Английский',subtitle:'6-9 лет (не с нуля)',teacher:'со Яна Вайсборд',hour:'11:15',minAge:'6',maxAge:'9',background:'#476A8A',url:'https://t.me/+KrXFv-vm5vUwNjUy',},{title:'',subtitle:'',teacher:'со ',hour:'11:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Иврит',subtitle:'9-11 лет',teacher:'со Виталий Лернер',hour:'12:00',minAge:'9',maxAge:'11',background:'#685068',url:'https://t.me/+dTvUq7-o0Z5lZDA6',},{title:'',subtitle:'',teacher:'со ',hour:'12:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Русский',subtitle:'13-18 лет',teacher:'со Лиза Гайдукова',hour:'13:00',minAge:'13',maxAge:'18',background:'#469494',url:'https://t.me/+hbhGuaK7eP9mMWFi',},{title:'',subtitle:'',teacher:'со ',hour:'13:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Литература',subtitle:'13-18 лет',teacher:'со Лиза Гайдукова',hour:'14:00',minAge:'13',maxAge:'18',background:'green',url:'https://t.me/+hbhGuaK7eP9mMWFi',},{title:'',subtitle:'',teacher:'со ',hour:'14:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Как приручить английский язык',subtitle:'13-18 лет',teacher:'со Аня Зиндер',hour:'15:30',minAge:'13',maxAge:'18',background:'#476A8A',url:'https://t.me/+8HMA5dNZ8XZjMTZi',},{title:'',subtitle:'',teacher:'со ',hour:'15:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Иврит с нуля',subtitle:'13-18 лет',teacher:'со Соня Велле',hour:'17:00',minAge:'13',maxAge:'18',background:'#685068',url:'https://t.me/+IIDvjpBd4ToxYzhi',},{title:'',subtitle:'',teacher:'со ',hour:'17:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'18:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'18:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'19:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'19:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'История',subtitle:'12-18 лет',teacher:'со Гриша Конников',hour:'20:00',minAge:'12',maxAge:'18',background:'red',url:'https://t.me/+PQQg5A3HnOM3NTky',},{title:'',subtitle:'',teacher:'со ',hour:'20:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'21:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'21:00',minAge:'',maxAge:'',background:'',url:'',},],],        [[{title:'',subtitle:'',teacher:'со ',hour:'9:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'9:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Английский',subtitle:'9-11 лет',teacher:'со Илья Левин',hour:'10:00',minAge:'9',maxAge:'11',background:'#476A8A',url:'https://t.me/+Wz6Qyq5byrBiZmYy',},{title:'',subtitle:'',teacher:'со ',hour:'10:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'11:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'11:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Математика',subtitle:'10-11 кл',teacher:'со Лена Казакевич',hour:'12:30',minAge:'16',maxAge:'17',background:'#9D3848',url:'https://t.me/+dlYZ_tUhaF0wZGRi',},{title:'',subtitle:'',teacher:'со ',hour:'12:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Ботаника',subtitle:'5 кл',teacher:'со Даша Сухова',hour:'13:00',minAge:'11',maxAge:'12',background:'green',url:'https://t.me/+_BcNwmpves40N2Uy',},{title:'',subtitle:'',teacher:'со ',hour:'13:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Математика дошкольники',subtitle:'?',teacher:'со Ната Ф-Малиновская',hour:'14:00',minAge:'6',maxAge:'9',background:'#9D3848',url:'https://t.me/+eu4VkPw6PodlNGMy',},{title:'',subtitle:'',teacher:'со ',hour:'14:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'А что это тут растёт?',subtitle:'?',teacher:'со Дарья Сухова',hour:'15:00',minAge:'13',maxAge:'18',background:'red',url:'https://t.me/+RbM3LGmQ2E5mNjIy',},{title:'Сочини своего волшебного помощника',subtitle:'?',teacher:'со Лена Сибирцева',hour:'15:00',minAge:'13',maxAge:'18',background:'blue',url:'https://t.me/+SCdlOyAiNt4xY2Uy',},], [{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'17:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'17:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Немецкий',subtitle:'8-11 лет',teacher:'со Лиза Гайдукова',hour:'18:00',minAge:'13',maxAge:'18',background:'green',url:'https://t.me/+G7-CweDzVn02OGI6',},{title:'',subtitle:'',teacher:'со ',hour:'18:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'19:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'19:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Иллюстрация: свет, цвет и разные существа.',subtitle:'?',teacher:'со Наталия Колосова',hour:'20:00',minAge:'13',maxAge:'18',background:'yellow',url:'https://t.me/+yuVkI7DUIXFmYzMy',},{title:'Иудаизм: как он влияет на жизнь израильтян',subtitle:'?',teacher:'со Марина Шунра Карпов',hour:'20:00',minAge:'13',maxAge:'18',background:'brown',url:'https://t.me/+Okk78byfrYdmMWE6',},], [{title:'',subtitle:'',teacher:'со ',hour:'21:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'21:00',minAge:'',maxAge:'',background:'',url:'',},],],        [[{title:'Английский консультация',subtitle:'?',teacher:'со Аня Зиндер',hour:'9:00',minAge:'13',maxAge:'18',background:'#476A8A',url:'https://t.me/+rQknix2Llls1YTAy',},{title:'',subtitle:'',teacher:'со ',hour:'9:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Город - инструкция по применению',subtitle:'?',teacher:'со Дарья Табачникова',hour:'10:00',minAge:'13',maxAge:'18',background:'blue',url:'https://t.me/+ulDokcQvGWEyOWZi',},{title:'',subtitle:'',teacher:'со ',hour:'10:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'11:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'11:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Русский',subtitle:'7 кл',teacher:'со Саша Денисова',hour:'12:00',minAge:'13',maxAge:'14',background:'#469494',url:'https://t.me/+JKSDKETXknhmOGZi',},{title:'',subtitle:'',teacher:'со ',hour:'12:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Литература',subtitle:'7 кл',teacher:'со Саша Денисова',hour:'13:00',minAge:'13',maxAge:'14',background:'#469494',url:'https://t.me/+JKSDKETXknhmOGZi',},{title:'Кукольный театр',subtitle:'?',teacher:'со Софья Велле',hour:'13:00',minAge:'13',maxAge:'18',background:'red',url:'https://t.me/+doxbsISDeW4wMzgy',},], [{title:'',subtitle:'',teacher:'со ',hour:'14:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'14:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Иврит с нуля',subtitle:'13-18 лет',teacher:'со Соня Велле',hour:'15:30',minAge:'13',maxAge:'18',background:'#685068',url:'https://t.me/+IIDvjpBd4ToxYzhi',},{title:'',subtitle:'',teacher:'со ',hour:'15:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'17:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'17:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Танах для старших',subtitle:'?',teacher:'со Шурик Синичкин',hour:'18:00',minAge:'13',maxAge:'18',background:'brown',url:'https://t.me/+jaPnPF5Y3nM3ODMy',},{title:'',subtitle:'',teacher:'со ',hour:'18:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'История искусств',subtitle:'4-6 кл',teacher:'со Яна Радолицкая',hour:'19:00',minAge:'10',maxAge:'12',background:'purple',url:'https://t.me/+aF11QcpVJeBiZjQy',},{title:'',subtitle:'',teacher:'со ',hour:'19:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'История',subtitle:'12-18 лет',teacher:'со Гриша Конников',hour:'20:00',minAge:'12',maxAge:'18',background:'red',url:'https://t.me/+PQQg5A3HnOM3NTky',},{title:'',subtitle:'',teacher:'со ',hour:'20:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'21:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'21:00',minAge:'',maxAge:'',background:'',url:'',},],],        [[{title:'Математика',subtitle:'7-8 лет',teacher:'со Настя Коляда',hour:'9:00',minAge:'7',maxAge:'8',background:'#9D3848',url:'https://t.me/+5rMXQ24GJmE5YjQ6',},{title:'',subtitle:'',teacher:'со ',hour:'9:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Английский',subtitle:'9-11 лет',teacher:'со Илья Левин',hour:'10:00',minAge:'9',maxAge:'11',background:'#476A8A',url:'https://t.me/+Wz6Qyq5byrBiZmYy',},{title:'Биоразнообразие',subtitle:'6-8 кл',teacher:'со Гриша Генихович',hour:'10:00',minAge:'12',maxAge:'14',background:'gray',url:'https://t.me/+Ul34X_CelFNiNTM0',},], [{title:'Анимация',subtitle:'?',teacher:'со Лера Лемешевская',hour:'11:00',minAge:'13',maxAge:'18',background:'blue',url:'https://t.me/+mRWOIu4Abw4zYzNi',},{title:'История искусств',subtitle:'4-6 кл',teacher:'со Яна Радолицкая',hour:'11:00',minAge:'10',maxAge:'12',background:'red',url:'https://t.me/+aF11QcpVJeBiZjQy',},], [{title:'как тихоходка не путается в ножках',subtitle:'?',teacher:'со Анна Митева',hour:'12:00',minAge:'13',maxAge:'18',background:'blue',url:'https://t.me/+R4Omd6TaUUpmMGVi',},{title:'',subtitle:'',teacher:'со ',hour:'12:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'13:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'13:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Бизнес стратегии',subtitle:'14-18 лет',teacher:'со Людмила Мургулец',hour:'14:00',minAge:'14',maxAge:'18',background:'red',url:'https://t.me/+tuBsDBJBeAI1MDk6',},{title:'',subtitle:'',teacher:'со ',hour:'14:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'А что это тут растёт?',subtitle:'?',teacher:'со Дарья Сухова',hour:'15:00',minAge:'13',maxAge:'18',background:'blue',url:'https://t.me/+RbM3LGmQ2E5mNjIy',},{title:'',subtitle:'',teacher:'со ',hour:'15:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'17:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'17:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'18:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'18:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'19:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'19:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Иврит для взрослых',subtitle:'?',teacher:'со Соня Велле',hour:'20:00',minAge:'18',maxAge:'99',background:'#685068',url:'https://t.me/+qqwvaklIE800ZjZi',},{title:'Иллюстрация: свет, цвет и разные существа.',subtitle:'?',teacher:'со Наталия Колосова',hour:'20:00',minAge:'13',maxAge:'18',background:'red',url:'https://t.me/+yuVkI7DUIXFmYzMy',},], [{title:'Книжные посиделки',subtitle:'?',teacher:'со Лиза Дроздовская',hour:'21:00',minAge:'13',maxAge:'99',background:'blue',url:'https://t.me/+Z1NcXf1NJs43YjVi',},{title:'',subtitle:'',teacher:'со ',hour:'21:00',minAge:'',maxAge:'',background:'',url:'',},],],        [[{title:'Русский',subtitle:'3-4 кл',teacher:'со Настя Карпова',hour:'9:00',minAge:'9',maxAge:'10',background:'#469494',url:'https://t.me/+HFfcNiFLdiIwN2Vi',},{title:'',subtitle:'',teacher:'со ',hour:'9:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Литература',subtitle:'3-4 кл',teacher:'со Настя Карпова',hour:'10:00',minAge:'9',maxAge:'10',background:'red',url:'https://t.me/+HFfcNiFLdiIwN2Vi',},{title:'Математика',subtitle:'8-9 кл',teacher:'со Вера Кипяткова',hour:'10:00',minAge:'14',maxAge:'16',background:'blue',url:'https://t.me/+JUN1Uk0f3N9iOTMy',},], [{title:'',subtitle:'',teacher:'со ',hour:'11:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'11:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Анатомия',subtitle:'9 кл',teacher:'со Аня Митева',hour:'12:30',minAge:'15',maxAge:'16',background:'purple',url:'https://t.me/+e1eHf2anqbo1MzAy',},{title:'',subtitle:'',teacher:'со ',hour:'12:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'13:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'13:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'14:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'14:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Танах младшая группа',subtitle:'?',teacher:'со Шурик Синичкин',hour:'15:00',minAge:'13',maxAge:'18',background:'blue',url:'https://t.me/+jaPnPF5Y3nM3ODMy',},{title:'',subtitle:'',teacher:'со ',hour:'15:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'17:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'17:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'18:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'18:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'19:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'19:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'20:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'20:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'21:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'21:00',minAge:'',maxAge:'',background:'',url:'',},],],        [[{title:'',subtitle:'',teacher:'со ',hour:'9:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'9:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'10:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'10:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'11:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'11:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Иврит - разговорный клуб',subtitle:'18+',teacher:'со Асаф',hour:'12:00',minAge:'18',maxAge:'99',background:'green',url:'https://t.me/+G8SsU5Z7Xpc4NTMy',},{title:'',subtitle:'',teacher:'со ',hour:'12:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'13:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'13:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'14:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'14:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'15:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'15:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Французский для начинающих',subtitle:'10-14 лет',teacher:'со Лера Трафимова',hour:'17:00',minAge:'10',maxAge:'14',background:'pink',url:'https://t.me/+-aWVLlF7m0M1ZTIy',},{title:'',subtitle:'',teacher:'со ',hour:'17:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'18:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'18:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'19:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'19:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Встречи по субботам',subtitle:'?',teacher:'со ?',hour:'20:00',minAge:'13',maxAge:'18',background:'green',url:'https://t.me/+2Woeyl5OcIMwMGYy',},{title:'',subtitle:'',teacher:'со ',hour:'20:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'21:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'21:00',minAge:'',maxAge:'',background:'',url:'',},],],        [[{title:'',subtitle:'',teacher:'со ',hour:'9:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'9:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'10:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'10:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Французский не с нуля',subtitle:'10-14 лет',teacher:'со Лера Трафимова',hour:'11:00',minAge:'10',maxAge:'14',background:'green',url:'https://t.me/+-aWVLlF7m0M1ZTIy',},{title:'',subtitle:'',teacher:'со ',hour:'11:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'12:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'12:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'13:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'13:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'14:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'14:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'15:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'15:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'16:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'17:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'17:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'18:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'18:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'19:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'19:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'Иврит для взрослых',subtitle:'?',teacher:'со Соня Велле',hour:'20:00',minAge:'18',maxAge:'99',background:'#685068',url:'https://t.me/+qqwvaklIE800ZjZi',},{title:'',subtitle:'',teacher:'со ',hour:'20:00',minAge:'',maxAge:'',background:'',url:'',},], [{title:'',subtitle:'',teacher:'со ',hour:'21:00',minAge:'',maxAge:'',background:'',url:'',},{title:'',subtitle:'',teacher:'со ',hour:'21:00',minAge:'',maxAge:'',background:'',url:'',},],],];

}