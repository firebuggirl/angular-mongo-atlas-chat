# Update Angular

- ` nvm use <node-version>`

        - ` npm install @angular/cli@latest `

        - ` ng update @angular/cli `//from within project directory

            - new `angular.json` file is generated replacing the old `.angular-cli.json`

        - now analyze existing project to check for outdated libraries:

            - ` ng update `

            - ` ng update @angular/core `

        - delete `node_modules` + `package-lock.json` file in your project and re-run `npm install` if facing issues after updating
