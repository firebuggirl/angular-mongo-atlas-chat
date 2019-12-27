# Update Angular

- ` nvm use <node-version>
`

- ` npm install @angular/cli@latest `

- ` ng update @angular/cli `//from within project directory

- new `angular.json` file is generated replacing the old `.angular-cli.json`

- now analyze existing project to check for outdated libraries:


      - ` ng update `

      - ` ng update @angular/core `

      - delete `node_modules` + `package-lock.json` file in your project and re-run `npm install` if facing issues after updating

- or...

  ` ng update @angular/cli @angular/core
  `

- if facing issues, try:

  https://update.angular.io/


- in `./polyfills.ts` => change `import 'core-js/es7/reflect'` to `import 'zone.js/dist/zone'`

# Node audits/updates

# Identify which packages use which dependencies

  - EX:

      ` npm ls adm-zip
      `
      https://docs.npmjs.com/cli/ls


## Check for vulnerable dependencies

      ` npm audit `

      ` npm audit fix
      `

        - OR

      ` npm update
      `

      - OR

      ` npm outdated
      `


## Dec 27 - 2019 => npm audit fix
