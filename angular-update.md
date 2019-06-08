# Update Angular


  ` ng update @angular/cli @angular/core
  `

  - if facing issues, try:

    https://update.angular.io/


  - in `./polyfills.ts` => change `import 'core-js/es7/reflect'` to `import 'zone.js/dist/zone'`

# Check for other outdated packages

  ` npm outdated
  `

  ` npm update
  `

# Check for Vulnerabilities:

  ` npm audit
  `

  ` npm audit fix
  `

# Identify which packages use which dependencies

  - EX:

      ` npm ls adm-zip
      `
