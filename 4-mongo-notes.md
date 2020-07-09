## Info on Mongoose populate

http://mongoosejs.com/docs/populate.html

## MongoDB Atlas notes:

- install latest version (on Mac) of Mongo Shell locally:

      - `brew install mongodb --with-openssl`

      - `brew upgrade mongodb`//upgrade if older version already installed

      - versions are stored in ` /usr/local/Cellar/mongodb `

## Connect with MongoDB Cluster

https://cloud.mongodb.com

- create Cluster

- -> `Security` -> `MongoDb Users` -> `Add user` -> `read/write/any/DB`

- -> `IP Whitelest` local machine .....may need to be refreshed every couple of days

## Mongoose => Populate

https://mongoosejs.com/docs/populate.html

## Mongo Dump

- from local running instance:

      `cd ~`

      `mongodump  --db mongo-chat`//bson docs


# #Export (JSON) from local MongoDB Instance


`mongoexport --db mongo-chat --collection posts --type=json  --out post.json`

`mongoexport --db mongo-chat --collection users --type=json  --out user.json`

- ...have to create read/write permissions via Atlas UI for this DB 1st!!!!

`mongoimport --host`.....see MongoDB ATLAS ADMIN login creds in password manager

