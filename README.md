# Angular-mongo-atlas-chat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## NOTES:

## Node as a backend REST API + Angular Material 6 as frontend

  * Note: project will not work with Node versions < 8.9.0

      - Use nvm package manager before starting/running project:

        ` nvm use 8.9 `

      - Run backend in one shell:

        ` npm run start:server `

            - backend uri -> ` http://localhost:3000/api/posts `

      - Run frontend in another shell:

        ` ng serve `

## Info on Mongoose populate

http://mongoosejs.com/docs/populate.html


## MongoDB Atlas notes:

- install latest version (on Mac) of Mongo Shell locally:

      - ` brew install mongodb --with-openssl `

      - ` brew upgrade mongodb `//upgrade if older version already installed

      - versions are stored in ` /usr/local/Cellar/mongodb `

## Connect with MongoDB Cluster

https://cloud.mongodb.com

- create Cluster

- -> `Security` -> `MongoDb Users` -> `Add user ` -> `read/write/any/DB`

- -> `IP Whitelest` local machine .....may need to be refreshed every couple of days



## SPA Authentication

https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/v4/t/lecture/10536930?start=0

- JWT
https://jwt.io/introduction/

- Angular Interceptors info:

  -  https://angular.io/guide/http#intercepting-requests-and-responses



## Auth Interceptor

      - used to intercept all outgoing requests + add auth header


## Error Interceptor

https://material.angular.io/components/dialog/overview

        - add `MAT_DIALOG_DATA` to `ErrorComponent` to display error dialog box via frontend

        - /add custom error messages via backend. EX: See `routes/user.js` for messages
## To Do:

Work on Handling errors:


    - https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/v4/t/lecture/10554058?start=0
