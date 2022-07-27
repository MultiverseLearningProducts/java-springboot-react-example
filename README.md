# Java Backend React Frontend

This project nests a React project in a Spring project. You will need 2 terminal sessions to control your 2 processes when you are developing. One terminal will be running your SpringBoot server on `localhost:8080`. The second terminal will run the hot building of your React project. In the nested NodeJS project which you'll see is in the `/src/frontend` folder look in the `package.json` file.

```json
  "scripts": {
    "start": "parcel --dist-dir ../main/resources/static",
    "build": "parcel build"
  }
```

You will notice how the `npm start` command will build your react project into the static folder of the springboot server. So you'll see the react app at `localhost:8080/`. Nice. Remember if you want to deploy your full stack app run `npm run build` to get the latest build into your springboot project - then you can create a `.jar` file for your app.

## Seed Data

This project is ready for CRUD action on your database, there is a seeding script that will load you 13 plants to get you started. At present there is an in memory database. If you wanted to change this an persist your data to a file update the `/src/main/resources/application.properties` file and swap out the following lines:

```java
spring.datasource.url=jdbc:h2:mem:plants.db // this will be in memory
spring.datasource.url=jdbc:h2:file:/path/to/plants.db // this will be a file on disc
```
Any SQL queries in a file called `data.sql` and placed in the following location `/src/main/resources/data.sql` will be run for an in-memory database. If you are using a file for your database, you can visit `http://localhost:8080/h2-console` and manually copy and paste your SQL statements and run them via the H2 web console. I guess the idea being if you are persisting your data in a file based H2 instance, you don't need to seed the database every run.

GO HACK!!