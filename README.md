# RickMortyApp

## Steps to start testing:

- Start MongoDB: `mongod`

- Start frontend app:
```shell
npm i
npm run start
```

- Start backend app:
```shell
- npm i
- npm run start
```
- Register user:
```shell
curl --location --request POST 'http://localhost:3060/api/user/register' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=admin@admin.com' \
--data-urlencode 'password=adminadmin'
```
- [Check app / http://localhost:3000/login](http://localhost:3000/login)
    - email=admin@admin.com
    - password=adminadmin