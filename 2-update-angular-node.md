# Update Angular

- `nvm use <node-version>`

- `npm install @angular/cli@latest`

- `ng update @angular/cli`//from `./`

- new `angular.json` file is generated replacing the old `.angular-cli.json`

- now analyze existing project to check for outdated libraries:


      - `ng update`

      - `ng update @angular/core`

      - delete `node_modules` + `package-lock.json` file in your project and re-run `npm install` if facing issues after updating

- or...

  `ng update @angular/cli @angular/core`

- if facing issues, try:

  https://update.angular.io/


- in `./polyfills.ts` => change `import 'core-js/es7/reflect'` to `import 'zone.js/dist/zone'`

## Node audits/updates

## Identify which packages use which dependencies

  - EX:

      `npm ls adm-zip`

      https://docs.npmjs.com/cli/ls


## Check for vulnerable dependencies

  `npm audit`

  `npm audit fix`

    - OR

  `npm update`

    - OR

  `npm outdated`


## Dec 27 - 2019 => npm audit fix

## 7/13/2020 => Angular 10

- `ng update @angular/cli @angular/core`//error => Repository is not clean

- `ng update @angular/cli @angular/core --allow-dirty`

### updates in v10:

https://blog.angulartraining.com/whats-new-in-angular-10-be249ed2ac2

- TypeScript 3.9, TSLib 2.0, & TS Lint v6

- `date range picker` in Angular Material 10

- Warnings when using CommonJS imports as they can result in both larger and slower applications.

- Optional stricter settings => can create new projects with a strict flag w/ stricter listing rules, bundle sizes => more efficient tree-shaking (ie., dead code elimination).
