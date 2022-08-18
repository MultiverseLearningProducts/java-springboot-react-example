# Plant Store

This very simple Springboot server does 2 things:

1. exposes a list of plants at `http://localhost:8080/api/plants`
1. serves static html files from the `/src/main/resources/static` folder

Start the spring boot server which will run on port 8080

## React frontend

in the `frontend` folder you can run `npm start` to build the react project into the springboot server's static folder. Visit `http://localhost:8080/` to see your react frontend.

![screen shot of the plant store](https://user-images.githubusercontent.com/4499581/185190187-db3818b6-b9db-4dd7-89a7-a0cacab6e204.png)

## end-2-end tests

`npm test`