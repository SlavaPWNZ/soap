Тестовое задание<br><br>
_**Реализовать укорачиватель ссылок**_<br><br>
Приложение принимает (через веб-интерфейс или без него) какой-либо URL и взамен выдает
короткую ссылку на него (по примеру http://bit.ly) на своем домене, при переходе по которой
приложение перебрасывает пользователя на исходный «неукороченный» URL.<br>

1) Реализовать на базе любого PHP фреймворка
2) Возможно использование любых расширений
3) Оформление фронтента не требуется
4) Подумать о потенциальной возможности добавления в БД 10,000 ссылок от пользователей ежедневно
6) Приложить инструкцию по запуску вашего приложения

<br><br><br><br>
**Установка:**

1) git clone https://github.com/SlavaPWNZ/bitly.git
2) cd bitly
3) composer install
4) установить и создать базу данных MySQL
5) создать файл .env в корне проекта. Скопировать туда код из .env.example и поменить данные на нужные... (APP_URL, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD)
6) php artisan migrate:refresh --seed
7) изменить файл hosts, прописать ip и домен

Демо-версия: http://n3.s96797r5.beget.tech/