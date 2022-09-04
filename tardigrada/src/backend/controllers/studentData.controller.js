const knex = require('../dbConnection');
const tableName = 'children';
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_KEY });

exports.saveChild = async (req, res) => {
  notion.pages.create({
    parent: { database_id: process.env.NOTION_DATABASE_ID },
    properties: {
      "Имя ребенка": {
        "rich_text": [
          {
            "text": {
              "content": req.body.firstName
            }
          }
        ]
      },
      "Фамилия ребенка": {
        "rich_text": [{"text": {"content": req.body.lastName}}]
      },
      //Возраст на данный момент
      "Класс": {
        "select": {
          "name": "3",
          "id":"1"
        }
      },
      "Предметы, которые вы хотели бы изучать": {
        "object": "property_item",
        "type": "multi_select",
        "multi_select": [
          {
            "name": "subjects: "+req.body.subjects,
          }
        ]
      },
      /*
        Предметы
        школа
        Уроки 
      */
      "Дата рождения": {
        "rich_text": [{"text": {"content": req.body.dateOfBirth}}]
      },
      "уровень знания языков": {
        "rich_text": [{"text": {"content": req.body.language}}]
      },
      "Что-то еще, что нам надо знать": {
        "rich_text": [{"text": {"content": req.body.note}}]
      },
      "Часовой пояс ": {
        "rich_text": [{"text": {"content": req.body.timezone}}]
      },
      "Опыт обучения в ZOOM": {
        "select": {
          "name": req.body.zoom
        }
      },
      "девайс для занятия": {
        "rich_text": [{"text": {"content": req.body.device}}]
      },
      "Есть ли жесткие ограничения по времени?": {
        "rich_text": [{"text": {"content": req.body.limits}}]
      },
      "Телеграм ребенка (для самостоятельных детей)": {
        "rich_text": [{"text": {"content": req.body.telegram}}]
      },
      /*
        Нужны ли оффлайн занятия в Израиле (скорее всего Иерусалим)
        Имя
        Фамилия
        Контакт в телеграмме
        Другие контакты
        "Что-то, что мы забыли спросить"
        Отметка времени
        Вы присоединились к каналу?
      */
    },
  });
  knex(tableName)
  .insert(req.body)
  .then((row) => {
    if (row > 0) {
    return res
      .status(200)
      .send({message: 'New child was saved'});
    } else {
      return res.status(400).send({message: 'failed saving child'});
    }
  });
}