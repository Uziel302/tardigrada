import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ZonesInRussian {
  //the list was taken from microsoft page that has both english and russian
  //https://learn.microsoft.com/ru-ru/sql/linux/sql-server-linux-configure-time-zone?view=sql-server-ver16
  public zonesMap = new Map([
    ['Africa/Abidjan', 'Африка/Абиджан'],
    ['Africa/Accra', 'Африка/Аккра'],
    ['Africa/Addis_Ababa', 'Африка/Аддис-Абеба'],
    ['Africa/Algiers', 'Африка/Алжир'],
    ['Africa/Asmera', 'Африка/Асмара'],
    ['Africa/Bamako', 'Африка/Бамако'],
    ['Africa/Bangui', 'Африка/Банги'],
    ['Africa/Banjul', 'Африка/Банжул'],
    ['Africa/Bissau', 'Африка/Биссау'],
    ['Africa/Blantyre', 'Африка/Блантайр'],
    ['Africa/Brazzaville', 'Африка/Браззавиль'],
    ['Africa/Bujumbura', 'Африка/Бужумбура'],
    ['Africa/Cairo', 'Африка/Каир'],
    ['Africa/Casablanca', 'Африка/Касабланка'],
    ['Africa/Ceuta', 'Африка/Сеута'],
    ['Africa/Conakry', 'Африка/Конакри'],
    ['Africa/Dakar', 'Африка/Дакар'],
    ['Africa/Dar_es_Salaam', 'Africa/Дар-эс-Салам'],
    ['Africa/Djibouti', 'Африка/Джибути'],
    ['Africa/Douala', 'Африка/Дуала'],
    ['Africa/El_Aaiun', 'Африка/Эль-Аюн'],
    ['Africa/Freetown', 'Африка/Фритаун'],
    ['Africa/Gaborone', 'Африка/Габороне'],
    ['Africa/Harare', 'Африка/Хараре'],
    ['Africa/Johannesburg', 'Африка/Йоханнесбург'],
    ['Africa/Juba', 'Африка/Джуба'],
    ['Africa/Kampala', 'Африка/Кампала'],
    ['Africa/Khartoum', 'Африка/Хартум'],
    ['Africa/Kigali', 'Африка/Кигали'],
    ['Africa/Kinshasa', 'Африка/Киншаса'],
    ['Africa/Lagos', 'Африка/Лагос'],
    ['Africa/Libreville', 'Африка/Либревилл'],
    ['Africa/Lome', 'Африка/Ломе'],
    ['Africa/Luanda', 'Африка/Луанда'],
    ['Africa/Lubumbashi', 'Африка/Лубумбаши'],
    ['Africa/Lusaka', 'Африка/Лусака'],
    ['Africa/Malabo', 'Африка/Малабо'],
    ['Africa/Maputo', 'Африка/Мапуто'],
    ['Africa/Maseru', 'Африка/Масеру'],
    ['Africa/Mbabane', 'Африка/Мбабане'],
    ['Africa/Mogadishu', 'Африка/Могадишо'],
    ['Africa/Monrovia', 'Африка/Монровия'],
    ['Africa/Nairobi', 'Африка/Найроби'],
    ['Africa/Ndjamena', 'Африка/Нджамена'],
    ['Africa/Niamey', 'Африка/Ниамей'],
    ['Africa/Nouakchott', 'Африка/Нуакшот'],
    ['Africa/Ouagadougou', 'Африка/Уагадугу'],
    ['Africa/Porto-Novo', 'Африка/Порто-Ново'],
    ['Africa/Sao_Tome', 'Африка/Сан-Томе'],
    ['Africa/Tripoli', 'Африка/Триполи'],
    ['Africa/Tunis', 'Африка/Тунис'],
    ['Africa/Windhoek', 'Африка/Виндхук'],
    ['America/Adak', 'Северная Америка/Адак'],
    ['America/Anchorage', 'Северная Америка/Анкоридж'],
    ['America/Anguilla', 'Южная Америка/Ангилья'],
    ['America/Antigua', 'Южная Америка/Антигуа'],
    ['America/Araguaina', 'Америка/Арагуаина'],
    ['America/Argentina/La_Rioja', 'Америка/Аргентина/Ла-Риоха'],
    ['America/Argentina/Rio_Gallegos', 'Америка/Аргентина/Рио-Гальегос'],
    ['America/Argentina/Salta', 'Южная Америка/Аргентина/Сальта'],
    ['America/Argentina/San_Juan', 'Южная Америка/Аргентина/Сан-Хуан'],
    ['America/Argentina/San_Luis', 'Южная Америка/Аргентина/Сан-Луис'],
    ['America/Argentina/Tucuman', 'Южная Америка/Аргентина/Тукуман'],
    ['America/Argentina/Ushuaia', 'Южная Америка/Аргентина/Ушуая'],
    ['America/Aruba', 'Южная Америка/Аруба'],
    ['America/Asuncion', 'Южная Америка/Асунсьон'],
    ['America/Bahia', 'Южная Америка/Баия'],
    ['America/Bahia_Banderas', 'Южная Америка/Баия-Бандерас'],
    ['America/Barbados', 'Южная Америка/Барбадос'],
    ['America/Belem', 'Южная Америка/Белен'],
    ['America/Belize', 'Южная Америка/Белиз'],
    ['America/Blanc-Sablon', 'Северная Америка/Блан-Саблон'],
    ['America/Boa_Vista', 'Южная Америка/Боа-Виста'],
    ['America/Bogota', 'Южная Америка/Богота'],
    ['America/Boise', 'Северная Америка/Бойсе'],
    ['America/Buenos_Aires', 'Южная Америка/Буэнос-Айрес'],
    ['America/Cambridge_Bay', 'Северная Америка/Кеймбридж-бей'],
    ['America/Campo_Grande', 'Южная Америка/Кампо-гранде'],
    ['America/Cancun', 'Южная Америка/Канкун'],
    ['America/Caracas', 'Южная Америка/Каракас'],
    ['America/Catamarca', 'Южная Америка/Катамарка'],
    ['America/Cayenne', 'Южная Америка/Кайенна'],
    ['America/Cayman', 'Южная Америка/Кайман'],
    ['America/Chicago', 'Северная Америка/Чикаго'],
    ['America/Chihuahua', 'Южная Америка/Чиуауа'],
    ['America/Coral_Harbour', 'Северная Америка/Корал-Харбор'],
    ['America/Cordoba', 'Южная Америка/Кордоба'],
    ['America/Costa_Rica', 'Южная Америка/Коста-Рика'],
    ['America/Creston', 'Северная Америка/Крестон'],
    ['America/Cuiaba', 'Южная Америка/Куяба'],
    ['America/Curacao', 'Южная Америка/Кюрасао'],
    ['America/Danmarkshavn', 'Северная Америка/Данмарксхавн'],
    ['America/Dawson', 'Северная Америка/Доусон'],
    ['America/Dawson_Creek', 'Северная Америка/Доусон-Крик'],
    ['America/Denver', 'Северная Америка/Дэнвер'],
    ['America/Detroit', 'Северная Америка/Детройт'],
    ['America/Dominica', 'Южная Америка/Доминика'],
    ['America/Edmonton', 'Северная Америка/Эдмонтон'],
    ['America/Eirunepe', 'Южная Америка/Эйрунепе'],
    ['America/El_Salvador', 'Южная Америка/Сальвадор'],
    ['America/Fort_Nelson', 'Северная Америка/Форт-Нельсон'],
    ['America/Fortaleza', 'Южная Америка/Форталеза'],
    ['America/Glace_Bay', 'Северная Америка/Глейс-Бей'],
    ['America/Godthab', 'Северная Америка/Нуук'],
    ['America/Goose_Bay', 'Северная Америка/Гуз-Бей'],
    ['America/Grand_Turk', 'Южная Америка/Гранд-Терк'],
    ['America/Grenada', 'Южная Америка/Гренада'],
    ['America/Guadeloupe', 'Южная Америка/Гваделупа'],
    ['America/Guatemala', 'Южная Америка/Гватемала'],
    ['America/Guayaquil', 'Южная Америка/Гуаякиль'],
    ['America/Guyana', 'Южная Америка/Гайана'],
    ['America/Halifax', 'Северная Америка/Галифакс'],
    ['America/Havana', 'Южная Америка/Гавана'],
    ['America/Hermosillo', 'Южная Америка/Эрмосильо'],
    ['America/Indiana/Knox', 'Северная Америка/Индиана/Нокс'],
    ['America/Indiana/Marengo', 'Северная Америка/Индиана/Маренго'],
    ['America/Indiana/Petersburg', 'Северная Америка/Индиана/Петербург'],
    ['America/Indiana/Tell_City', 'Северная Америка/Индиана/Телл-Сити'],
    ['America/Indiana/Vevay', 'Северная Америка/Индиана/Вевей'],
    ['America/Indiana/Vincennes', 'Северная Америка/Индиана/Венсен'],
    ['America/Indiana/Winamac', 'Северная Америка/Индиана/Винамак'],
    ['America/Indianapolis', 'Северная Америка/Индианаполис'],
    ['America/Inuvik', 'Северная Америка/Инувик'],
    ['America/Iqaluit', 'Северная Америка/Икалуит'],
    ['America/Jamaica', 'Южная Америка/Ямайка'],
    ['America/Jujuy', 'Южная Америка/Жужуй'],
    ['America/Juneau', 'Северная Америка/Джуно'],
    ['America/Kentucky/Monticello', 'Северная Америка/Кентукки/Монтиселло'],
    ['America/Kralendijk', 'Южная Америка/Кралендейк'],
    ['America/La_Paz', 'Южная Америка/Ла-Пас'],
    ['America/Lima', 'Южная Америка/Лима'],
    ['America/Los_Angeles', 'America/Los_Angeles'],
    ['America/Louisville', 'Северная Америка/Луисвилл'],
    ['America/Lower_Princes', 'Южная Америка/Лоуэр-Принсес'],
    ['America/Maceio', 'Южная Америка/Масейо'],
    ['America/Managua', 'Южная Америка/Манагуа'],
    ['America/Manaus', 'Южная Америка/Манаус'],
    ['America/Marigot', 'Южная Америка/Мариго'],
    ['America/Martinique', 'Южная Америка/Мартиника'],
    ['America/Matamoros', 'Южная Америка/Матаморос'],
    ['America/Mazatlan', 'Южная Америка/Мазатлан'],
    ['America/Mendoza', 'Южная Америка/Мендоза'],
    ['America/Menominee', 'Северная Америка/Меномини'],
    ['America/Merida', 'Южная Америка/Мерида'],
    ['America/Metlakatla', 'Северная Америка/Метлакатла'],
    ['America/Mexico_City', 'Южная Америка/Мехико'],
    ['America/Miquelon', 'Южная Америка/Микелон'],
    ['America/Moncton', 'Северная Америка/Монктон'],
    ['America/Monterrey', 'Южная Америка/Монтеррей'],
    ['America/Montevideo', 'Южная Америка/Монтевидео'],
    ['America/Montreal', 'Северная Америка/Монреаль'],
    ['America/Montserrat', 'Южная Америка/Монтсеррат'],
    ['America/Nassau', 'Южная Америка/Нассау'],
    ['America/New_York', 'America/New_York'],
    ['America/Nipigon', 'Северная Америка/Нипигон'],
    ['America/Nome', 'Северная Америка/Ном'],
    ['America/Noronha', 'Южная Америка/Норонья'],
    ['America/North_Dakota/Beulah', 'Северная Америка/Южная Дакота/Беула'],
    ['America/North_Dakota/Center', 'Северная Америка/Северная Дакота/Центр'],
    [
      'America/North_Dakota/New_Salem',
      'Северная Америка/Северная Дакота/Нью-Салем',
    ],
    ['America/Ojinaga', 'Южная Америка/Охинага'],
    ['America/Panama', 'Южная Америка/Панама'],
    ['America/Pangnirtung', 'Северная Америка/Пангниртунг'],
    ['America/Paramaribo', 'Южная Америка/Парамарибо'],
    ['America/Phoenix', 'Северная Америка/Феникс'],
    ['America/Port-au-Prince', 'Южная Америка/Порт-о-Пренс'],
    ['America/Port_of_Spain', 'Южная Америка/Порт-оф-Спейн'],
    ['America/Porto_Velho', 'Южная Америка/Порту-Велью'],
    ['America/Puerto_Rico', 'Южная Америка/Пуэрто-Рико'],
    ['America/Punta_Arenas', 'Южная Америка/Пунта-Аренас'],
    ['America/Rainy_River', 'Северная Америка/Рейни-Ривер'],
    ['America/Rankin_Inlet', 'Северная Америка/Ранкин-Инлет'],
    ['America/Recife', 'Южная Америка/Ресифи'],
    ['America/Regina', 'Северная Америка/Реджайна'],
    ['America/Resolute', 'Северная Америка/Резолют'],
    ['America/Rio_Branco', 'Южная Америка/Рио-Бранко'],
    ['America/Santa_Isabel', 'Южная Америка/Санта-Исабель'],
    ['America/Santarem', 'Южная Америка/Сантарем'],
    ['America/Santiago', 'Южная Америка/Сантьяго'],
    ['America/Santo_Domingo', 'Южная Америка/Санто-Доминго'],
    ['America/Sao_Paulo', 'Южная Америка/Сан-Паулу'],
    ['America/Scoresbysund', 'Северная Америка/Скорсбисунн'],
    ['America/Sitka', 'Северная Америка/Ситка'],
    ['America/St_Barthelemy', 'Южная Америка/Сен-Бартелеми'],
    ['America/St_Johns', 'Северная Америка/Сент-Джонс'],
    ['America/St_Kitts', 'Южная Америка/Сент-Киттс'],
    ['America/St_Lucia', 'Южная Америка/Сент-Люсия'],
    ['America/St_Thomas', 'Южная Америка/Сент-Томас'],
    ['America/St_Vincent', 'Южная Америка/Сент-Винсент'],
    ['America/Swift_Current', 'Северная Америка/Свифт-Каррент'],
    ['America/Tegucigalpa', 'Южная Америка/Тегусигальпа'],
    ['America/Thule', 'Северная Америка/Туле'],
    ['America/Thunder_Bay', 'Северная Америка/Тандер-Бей'],
    ['America/Tijuana', 'Южная Америка/Тихуана'],
    ['America/Toronto', 'Северная Америка/Торонто'],
    ['America/Tortola', 'Южная Америка/Тортола'],
    ['America/Vancouver', 'Северная Америка/Ванкувер'],
    ['America/Whitehorse', 'Северная Америка/Уайтхорс'],
    ['America/Winnipeg', 'Северная Америка/Виннипег'],
    ['America/Yakutat', 'Северная Америка/Якутат'],
    ['America/Yellowknife', 'Северная Америка/Йеллоунайф'],
    ['Antarctica/Casey', 'Антарктида/Кейси'],
    ['Antarctica/Davis', 'Антарктида/Дэвис'],
    ['Antarctica/DumontDUrville', 'Антарктида/Дюмон-Дюрвиль'],
    ['Antarctica/Macquarie', 'Антарктида/Маккуори'],
    ['Antarctica/Mawson', 'Антарктида/Моусон'],
    ['Antarctica/McMurdo', 'Антарктида/Мак-Мердо'],
    ['Antarctica/Palmer', 'Антарктида/Палмер'],
    ['Antarctica/Rothera', 'Антарктида/Ротера'],
    ['Antarctica/Syowa', 'Антарктида/Сёва'],
    ['Antarctica/Vostok', 'Антарктида/Восток'],
    ['Arctic/Longyearbyen', 'Арктика/Лонгьир'],
    ['Asia/Aden', 'Азия/Аден'],
    ['Asia/Almaty', 'Азия/Алматы'],
    ['Asia/Amman', 'Азия/Амман'],
    ['Asia/Anadyr', 'Азия/Анадырь'],
    ['Asia/Aqtau', 'Азия/Актау'],
    ['Asia/Aqtobe', 'Азия/Актобе'],
    ['Asia/Ashgabat', 'Азия/Ашхабад'],
    ['Asia/Atyrau', 'Азия/Атырау'],
    ['Asia/Baghdad', 'Азия/Багдад'],
    ['Asia/Bahrain', 'Азия/Бахрейн'],
    ['Asia/Baku', 'Азия/Баку'],
    ['Asia/Bangkok', 'Азия/Бангкок'],
    ['Asia/Barnaul', 'Азия/Барнаул'],
    ['Asia/Beirut', 'Азия/Бейрут'],
    ['Asia/Bishkek', 'Азия/Бишкек'],
    ['Asia/Brunei', 'Азия/Бруней'],
    ['Asia/Kolkata', 'Азия/Калькутта'],
    ['Asia/Chita', 'Азия/Чита'],
    ['Asia/Choibalsan', 'Азия/Чойбалсан'],
    ['Asia/Colombo', 'Азия/Коломбо'],
    ['Asia/Damascus', 'Азия/Дамаск'],
    ['Asia/Dhaka', 'Азия/Дакка'],
    ['Asia/Dili', 'Азия/Дили'],
    ['Asia/Dubai', 'Азия/Дубай'],
    ['Asia/Dushanbe', 'Азия/Душанбе'],
    ['Asia/Famagusta', 'Азия/Фамагуста'],
    ['Asia/Gaza', 'Азия/Газа'],
    ['Asia/Hebron', 'Азия/Хеврон'],
    ['Asia/Ho Chi Minh City', 'Азия/Хо Чи Мин-Сити'],
    ['Asia/Hong_Kong', 'Азия/Гонконг'],
    ['Asia/Hovd', 'Азия/Ховд'],
    ['Asia/Irkutsk', 'Азия/Иркутск'],
    ['Asia/Jakarta', 'Азия/Джакарта'],
    ['Asia/Jayapura', 'Азия/Джайпур'],
    ['Asia/Jerusalem', 'Азия/Иерусалим'],
    ['Asia/Kabul', 'Азия/Кабул'],
    ['Asia/Kamchatka', 'Азия/Камчатка'],
    ['Asia/Karachi', 'Азия/Карачи'],
    ['Asia/Katmandu', 'Asia/Катманду'],
    ['Asia/Khandyga', 'Азия/Хандыга'],
    ['Asia/Krasnoyarsk', 'Азия/Красноярск'],
    ['Asia/Kuala_Lumpur', 'Азия/Куала-Лумпур'],
    ['Asia/Kuching', 'Азия/Кучинг'],
    ['Asia/Kuwait', 'Азия/Кувейт'],
    ['Asia/Macau', 'Азия/Макао'],
    ['Asia/Magadan', 'Азия/Магадан'],
    ['Asia/Makassar', 'Азия/Макассар'],
    ['Asia/Manila', 'Азия/Манила'],
    ['Asia/Muscat', 'Азия/Маскат'],
    ['Asia/Nicosia', 'Азия/Никосия'],
    ['Asia/Novokuznetsk', 'Азия/Новокузнецк'],
    ['Asia/Novosibirsk', 'Азия/Новосибирск'],
    ['Asia/Omsk', 'Азия/Омск'],
    ['Asia/Oral', 'Азия/Орал'],
    ['Asia/Phnom_Penh', 'Азия/Пномпень'],
    ['Asia/Pontianak', 'Азия/Понтианак'],
    ['Asia/Pyongyang', 'Азия/Пхеньян'],
    ['Asia/Qatar', 'Азия/Катар'],
    ['Asia/Qostanay', 'Азия/Костанай'],
    ['Asia/Qyzylorda', 'Азия/Кызылорда'],
    ['Asia/Riyadh', 'Азия/Эр-Рияд'],
    ['Asia/Sakhalin', 'Азия/Сахалин'],
    ['Asia/Samarkand', 'Азия/Самарканд'],
    ['Asia/Seoul', 'Азия/Сеул'],
    ['Asia/Shanghai', 'Азия/Шанхай'],
    ['Asia/Singapore', 'Азия/Сингапур'],
    ['Asia/Srednekolymsk', 'Азия/Среднеколымск'],
    ['Asia/Taipei', 'Азия/Тайбэй'],
    ['Asia/Tashkent', 'Азия/Ташкент'],
    ['Asia/Tbilisi', 'Азия/Тбилиси'],
    ['Asia/Tehran', 'Азия/Тегеран'],
    ['Asia/Thimphu', 'Азия/Тхимпху'],
    ['Asia/Tokyo', 'Азия/Токио'],
    ['Asia/Tomsk', 'Азия/Томск'],
    ['Asia/Ulaanbaatar', 'Азия/Улан-Батор'],
    ['Asia/Urumqi', 'Азия/Урумчи'],
    ['Asia/Ust-Nera', 'Азия/Усть-Нера'],
    ['Asia/Vientiane', 'Азия/Вьентьян'],
    ['Asia/Vladivostok', 'Азия/Владивосток'],
    ['Asia/Yakutsk', 'Азия/Якутск'],
    ['Asia/Yangon (Rangoon)', 'Азия/Янгон (Рангун)'],
    ['Asia/Yekaterinburg', 'Азия/Екатеринбург'],
    ['Asia/Yerevan', 'Азия/Ереван'],
    ['Atlantic/Azores', 'Атлантика/Азорские острова'],
    ['Atlantic/Bermuda', 'Атлантика/Бермудские острова'],
    ['Atlantic/Canary', 'Атлантика/Канарские острова'],
    ['Atlantic/Cabo_Verde', 'Атлантика/Cabo_Verde'],
    ['Atlantic/Faeroe', 'Атлантика/острова Фаро'],
    ['Atlantic/Madeira', 'Атлантика/Мадейра'],
    ['Atlantic/Reykjavik', 'Атлантика/Рейкьявик'],
    ['Atlantic/South_Georgia', 'Атлантика/Южная Георгия'],
    ['Atlantic/St_Helena', 'Атлантика/остров Св. Елены'],
    ['Atlantic/Stanley', 'Атлантика/Стэнли'],
    ['Australia/Adelaide', 'Австралия/Аделаида'],
    ['Australia/Brisbane', 'Австралия/Брисбен'],
    ['Australia/Broken_Hill', 'Австралия/Брокен-Хилл'],
    ['Australia/Currie', 'Австралия/Карри'],
    ['Australia/Darwin', 'Австралия/Дарвин'],
    ['Australia/Eucla', 'Австралия/Юкла'],
    ['Australia/Hobart', 'Австралия/Хобарт'],
    ['Australia/Lindeman', 'Австралия/Линдеман'],
    ['Australia/Lord_Howe', 'Австралия/Лорд-Хау'],
    ['Australia/Melbourne', 'Австралия/Мельбурн'],
    ['Australia/Perth', 'Австралия/Перт'],
    ['Australia/Sydney', 'Австралия/Сидней'],
    ['CST6CDT', 'CST6CDT'],
    ['EST5EDT', 'EST5EDT'],
    ['Etc/GMT', 'Etc/GMT'],
    ['Etc/GMT+1', 'Etc/GMT+1'],
    ['Etc/GMT+10', 'Etc/GMT+10'],
    ['Etc/GMT+11', 'Etc/GMT+11'],
    ['Etc/GMT+12', 'Etc/GMT+12'],
    ['Etc/GMT+2', 'Etc/GMT+2'],
    ['Etc/GMT+3', 'Etc/GMT+3'],
    ['Etc/GMT+4', 'Etc/GMT+4'],
    ['Etc/GMT+5', 'Etc/GMT+5'],
    ['Etc/GMT+6', 'Etc/GMT+6'],
    ['Etc/GMT+7', '/GMT+7'],
    ['Etc/GMT+8', 'Etc/GMT+8'],
    ['Etc/GMT+9', 'Etc/GMT+9'],
    ['Etc/GMT-1', 'Etc/GMT-1'],
    ['Etc/GMT-10', 'Etc/GMT-10'],
    ['Etc/GMT-11', 'Etc/GMT-11'],
    ['Etc/GMT-12', 'Etc/GMT-12'],
    ['Etc/GMT-13', 'Etc/GMT-13'],
    ['Etc/GMT-14', 'Etc/GMT-14'],
    ['Etc/GMT-2', 'Etc/GMT-2'],
    ['Etc/GMT-3', 'Etc/GMT-3'],
    ['Etc/GMT-4', 'Etc/GMT-4'],
    ['Etc/GMT-5', 'Etc/GMT-5'],
    ['Etc/GMT-6', 'Etc/GMT-6'],
    ['Etc/GMT-7', 'Etc/GMT-7'],
    ['Etc/GMT-8', 'Etc/GMT-8'],
    ['Etc/GMT-9', 'Etc/GMT-9'],
    ['Etc/UTC', 'Etc/UTC'],
    ['Europe/Amsterdam', 'Европа/Амстердам'],
    ['Europe/Andorra', 'Европа/Андорра'],
    ['Europe/Astrakhan', 'Европа/Астрахань'],
    ['Europe/Athens', 'Европа/Афины'],
    ['Europe/Belgrade', 'Европа/Белград'],
    ['Europe/Berlin', 'Европа/Берлин'],
    ['Europe/Bratislava', 'Европа/Братислава'],
    ['Europe/Brussels', 'Европа/Брюссель'],
    ['Europe/Bucharest', 'Европа/Бухарест'],
    ['Europe/Budapest', 'Европа/Будапешт'],
    ['Europe/Busingen', 'Европа/Бюзинген'],
    ['Europe/Chisinau', 'Европа /Кишинев'],
    ['Europe/Copenhagen', 'Европа/Копенгаген'],
    ['Europe/Dublin', 'Европа/Дублин'],
    ['Europe/Gibraltar', 'Европа/Гибралтар'],
    ['Europe/Guernsey', 'Европа/Гернси'],
    ['Europe/Helsinki', 'Европа/Хельсинки'],
    ['Europe/Isle_of_Man', 'Европа/остров Мэн'],
    ['Europe/Istanbul', 'Европа/Стамбул'],
    ['Europe/Jersey', 'Европа/Джерси'],
    ['Europe/Kaliningrad', 'Европа /Калининград'],
    ['Europe/Kiev', 'Европа/Киев'],
    ['Europe/Kirov', 'Европа/Киров'],
    ['Europe/Lisbon', 'Европа/Лиссабон'],
    ['Europe/Ljubljana', 'Европа/Любляна'],
    ['Europe/London', 'Европа/Лондон'],
    ['Europe/Luxembourg', 'Европа/Люксембург'],
    ['Europe/Madrid', 'Европа/Мадрид'],
    ['Europe/Malta', 'Европа/Мальта'],
    ['Europe/Mariehamn', 'Европа/Мариехамн'],
    ['Europe/Minsk', 'Европа/Минск'],
    ['Europe/Monaco', 'Европа/Монако'],
    ['Europe/Moscow', 'Европа/Москва'],
    ['Europe/Oslo', 'Европа/Осло'],
    ['Europe/Paris', 'Европа/Париж'],
    ['Europe/Podgorica', 'Европа/Подгорица'],
    ['Europe/Prague', 'Европа/Прага'],
    ['Europe/Riga', 'Европа/Рига'],
    ['Europe/Rome', 'Европа/Рим'],
    ['Europe/Samara', 'Европа/Самара'],
    ['Europe/San_Marino', 'Европа/Сан-Марино'],
    ['Europe/Sarajevo', 'Европа/Сараево'],
    ['Europe/Saratov', 'Европа/Саратов'],
    ['Europe/Simferopol', 'Европа/Симферополь'],
    ['Europe/Skopje', 'Европа/Скопье'],
    ['Europe/Sofia', 'Европа/София'],
    ['Europe/Stockholm', 'Европа/Стокгольм'],
    ['Europe/Tallinn', 'Европа/Таллинн'],
    ['Europe/Tirane', 'Европа/Тирана'],
    ['Europe/Ulyanovsk', 'Европа/Ульяновск'],
    ['Europe/Uzhgorod', 'Европа/Ужгород'],
    ['Europe/Vaduz', 'Европа/Вадуц'],
    ['Europe/Vatican', 'Европа/Ватикан'],
    ['Europe/Vienna', 'Европа/Вена'],
    ['Europe/Vilnius', 'Европа/Вильнюс'],
    ['Europe/Volgograd', 'Европа/Волгоград'],
    ['Europe/Warsaw', 'Европа/Варшава'],
    ['Europe/Zagreb', 'Европа/Загреб'],
    ['Europe/Zaporozhye', 'Европа/Запорожье'],
    ['Europe/Zurich', 'Европа/Цюрих'],
    ['Indian/Antananarivo', 'Индийский океан/Антананариву'],
    ['Indian/Chagos', 'Индийский океан/Чагос'],
    ['Indian/Christmas', 'Индийский океан/остров Рождества'],
    ['Indian/Cocos', 'Индийский океан/Кокосовые острова'],
    ['Indian/Comoro', 'Индийский океан/Коморские острова'],
    ['Indian/Kerguelen', 'Индийский океан/Кергелен'],
    ['Indian/Mahe', 'Индийский океан/Маэ'],
    ['Indian/Maldives', 'Индийский океан/Мальдивы'],
    ['Indian/Mauritius', 'Индийский океан/Маврикий'],
    ['Indian/Mayotte', 'Индийский океан/Майотта'],
    ['Indian/Reunion', 'Индийский океан/Реюньон'],
    ['MST7MDT', 'MST7MDT'],
    ['PST8PDT', 'PST8PDT'],
    ['Pacific/Apia', 'Тихоокеанский регион/Апиа'],
    ['Pacific/Auckland', 'Тихий океан/Окленд'],
    ['Pacific/Bougainville', 'Тихоокеанский регион/Бугенвиль'],
    ['Pacific/Chatham', 'Тихоокеанский регион/Чатем'],
    ['Pacific/Easter', 'Тихоокеанский регион/остров Пасхи'],
    ['Pacific/Efate', 'Тихоокеанский регион/Эфате'],
    ['Pacific/Enderbury', 'Тихоокеанский регион/Эндербери'],
    ['Pacific/Fakaofo', 'Тихоокеанский регион/Факаофо'],
    ['Pacific/Fiji', 'Тихоокеанский регион/острова Фиджи'],
    ['Pacific/Funafuti', 'Тихоокеанский регион/Фунафути'],
    ['Pacific/Galapagos', 'Тихоокеанский регион/Галапагосские острова'],
    ['Pacific/Gambier', 'Тихоокеанский регион/Гамбьер'],
    ['Pacific/Guadalcanal', 'Тихоокеанский регион/Гуадалканал'],
    ['Pacific/Guam', 'Тихоокеанский регион/Гуам'],
    ['Pacific/Honolulu', 'Тихоокеанский регион/Гонолулу'],
    ['Pacific/Johnston', 'Тихоокеанский регион/Джонстон'],
    ['Pacific/Kiritimati', 'Тихоокеанский регион/Киримати'],
    ['Pacific/Kosrae', 'Тихоокеанский регион/Кусаие'],
    ['Pacific/Kwajalein', 'Тихоокеанский регион/Кваджалейн'],
    ['Pacific/Majuro', 'Тихоокеанский регион/Маджуро'],
    ['Pacific/Marquesas', 'Тихоокеанский регион/Маркизские острова'],
    ['Pacific/Midway', 'Тихоокеанский регион/Мидуэй'],
    ['Pacific/Nauru', 'Тихоокеанский регион/Науру'],
    ['Pacific/Niue', 'Тихоокеанский регион/Ниуэ'],
    ['Pacific/Norfolk', 'Тихоокеанский регион/Норфолк'],
    ['Pacific/Noumea', 'Тихоокеанский регион/Нумеа'],
    ['Pacific/Pago_Pago', 'Тихоокеанский регион/Паго-Паго'],
    ['Pacific/Palau', 'Тихоокеанский регион/Палау'],
    ['Pacific/Pitcairn', 'Тихоокеанский регион/Питкерн'],
    ['Pacific/Ponape', 'Тихоокеанский регион/Понапе'],
    ['Pacific/Port_Moresby', 'Тихоокеанский регион/Порт-Моресби'],
    ['Pacific/Rarotonga', 'Тихоокеанский регион/Раротонга'],
    ['Pacific/Saipan', 'Тихоокеанский регион/Сайпан'],
    ['Pacific/Tahiti', 'Тихоокеанский регион/Таити'],
    ['Pacific/Tarawa', 'Тихоокеанский регион/Тарава'],
    ['Pacific/Tongatapu', 'Тихоокеанский регион/Тонгатапу'],
    ['Pacific/Truk', 'Тихоокеанский регион/Трук'],
    ['Pacific/Wake', 'Тихоокеанский регион/Уэйк'],
    ['Pacific/Wallis', 'Тихоокеанский регион/Уоллис'],
  ]);

  getZoneInRussian(timezone: string): string {
    return this.zonesMap.get(timezone) ?? '';
  }
}
