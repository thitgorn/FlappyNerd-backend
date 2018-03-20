### to setup server

```composer install && yarn```

### to setup .env file

```cp .env.example .env```

```php artisan key:generate```

### to setup database

edit .env file

DB_CONNECTION=mysql

DB_HOST=127.0.0.1

DB_PORT=3306

DB_DATABASE=test ( your database ) 

DB_USERNAME=root ( your database id )

DB_PASSWORD=password ( your database password )


### compile js file

```yarn run dev```

or if you want real time compile

```yarn run watch--poll```

### to run php server

```php artisan serve```
