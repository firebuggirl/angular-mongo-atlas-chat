## NOTES:

## Node as a backend REST API + Angular Material 6 as frontend

  * Note: project will not work with Node versions < 8.9.0

      - Use nvm package manager before starting/running project:

        ` nvm use 10.14
        `

      - Run backend in one shell:

        ` npm run start:server
        `

            - backend uri -> ` http://localhost:3000/api/posts `

      - Run frontend in another shell:

        ` ng serve
        `




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


## SNYK test for vulnerabilities:

https://snyk.io/docs/using-snyk/?utm_campaign=docs&utm_medium=github&utm_source=full_docs

        - ` npm i snyk --save `

        - ` snyk test `

        - Run ` snyk wizard ` to explore remediation options

        - OR

        ` npm audit fix
        `
## To Do:

Work on Handling errors:


    - https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/v4/t/lecture/10554058?start=0
