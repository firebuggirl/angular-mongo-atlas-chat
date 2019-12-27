# Deployment Options

## `1`:

      - 2 separated apps

          - Angular app

              - Static host

                  - AWS S3

                  - Firebase,

                  - Hosting

          - Node REST API

              - Node.js Host

                  - AWS EC2/EB

                  - Heroku

          - CORS headers required!

### Deploying the REST Api

https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/lecture/10576388#questions/7300656

    - see branch `2-app-deploy`

    - `AWS` => `Elastic Beanstalk` => sets up Node.js server => `create new application` => create `environment` => `web server environment` =>

        - platform => `Node.js`

        - `upload your code` => go to `/backend` directory => select all files w/in directory => right click => compress to zip => upload => `create environment`

        - choose `free tier (if available)`

        - `Software` => `modify` =>

              - `proxy server` => `nginx`

              - `Node.js` = choose version

              - `Node command` => `node server.js`

              - `Environment properties` => set environment variables from `nodemon,json` in GUI

                  - `MONGO_ATLAS_PW`

                  - `JWT_KEY`

              - Close `Software` panel => `Create Environment`

              - NOTE: Bcrypt will fail to compile => `npm i bcryptjs --save` (pre-compiles + adjust code

             - NOTE: add Node API address of Node server to MongoDB Atlas `IP Whitelist` (Don't do in real production DB!!..create separate prod cluster)

             - in EB console => actions => restart server

### Deploy Angular

https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/lecture/12651880#questions/7300656

    - deploy Angular to `AWS S3`

    - `BEFORE you add the bucket policy`, make sure you `configure the Bucket Permissions` => see link above

    - add `apiUrl` from Elastic Beanstalk to environment.prod.ts

    ` ng build --prod
    `// gets apiUrl from environment.prod.ts...

    - use `Amazon S3` => create new `bucket` => `upload (once bucket has been created)` all files from within the `dist` directory => `upload`

    - create a read-only bucket policy => `Granting Read-only Permission to n Anonymous User` (gives read access to anonymous users) => copy permission statement + add to `permissions=>bucket policy` => replace `example-bucket` with your/my bucket name => `save`

    - in UI => click on `properties` => `static website hosting`
    => `use this bucket to host a website` => index document `index.html` => error document `index.html` (enables routing for Angular)


      https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/lecture/10576394#questions


      - NOTE about storing images:

          - images will get erased whenever you re-deploy or destroy the instance => for a production-ready instance might want to use a separate (?) persistent storage like S3

      - AWS Training/courses:

        https://www.aws.training/LearningLibrary?filters=classification%3A55&filters=classification%3A6&filters=language%3A1&filters=digital%3A1&search=&tab=view_all

        - Developer Learning Paths:

        https://aws.amazon.com/training/path-developing/

## `2`:

      - One combined app => Integrated Approach

          - Node REST API renders Angular App

          - Node.js Host

              - AWS EC2/EB

              - Heroku

          - CORS headers not required!


    https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/lecture/10576396#questions/6286600


    - change `outputPath` in `angular.json` to `backend/angular`

    ` ng build --prod
    `

    - adjust code in `app.js`:

        ` app.use("./", express.static(path.join(__dirname, "angular")));
        `

        ` app.use((req, res, next) => {
          res.sendFile(path.join( __dirname, "angular", "index.html"));
          });
        `

    - test locally:

        ` npm run start:server
        `

        ` localhost:3000
        `

    - deploy:

        ` ng build --prod
        `

      - Elastic Beanstalk:

          - get all files from within `backend` directory => compress => `upload/deploy` => deploy/upload zip file



## Section Resources

https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/lecture/10577712#questions/6286600

- AWS Elastic Beanstalk Documentation:  

https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html
