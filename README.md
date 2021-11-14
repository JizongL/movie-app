# Introduction

This is a simple full stack application for users to keep up with movies and TV shows. In version 1,
it allows user to search movies by names and check out the detail of each of the movies found. It is
build with NodeJS, ExpressJS and ReactJs. React client is first built and then Node server is started
and the client is being served by ExpressJs as static content.

# Demo URL

This app is deployed to AWS fargate and you can view the [demo](http://3.94.158.145:5000/) here.

# Getting Started

The recommand way to run this project is by using `docker-compose up`, make sure you have [installed docker](https://www.docker.com/?utm_source=google&utm_medium=cpc&utm_campaign=dockerhomepage&utm_content=namer&utm_term=dockerhomepage&utm_budget=growth&gclid=Cj0KCQiAhMOMBhDhARIsAPVml-EL5wV4L0a85P7lPdSyg_CBr8TUYGK_BLEL2L3f9iLd2MpCJWGj9sMaAjOnEALw_wcB), and configured it properly, you can read [this](https://docs.docker.com/desktop/mac/install/) for more details.

Once Docker is ready, you must run `yarn install-all` to install the dependencies before you can run `docker-compose up` in the root directory or the docker build will fail. After docker build is sucessful it will create an image and container and build the cilent and start the nodejs server inside the container.
it's mapped to the port `5000` in the host so you can access the application in the browers with `localhost:5000`

## API endpoints

This application is structured on NodeJS and ExpressJS, so after you successfully built the docker image and the app is running, you can use the same port to access
not only the client app, but also the various endpoints.

## Available Scripts

In the project directory, you can run:

### `yarn start`

This command is for development mode, it first builds the react client and create a build folder in the root directory, then it starts the nodeJS server
which serves the client build folder.

**Note:**

- please make sure you run `yarn` before you run `yarn start` in root and also run `yarn start` in side server folder. Or it will fail.
- env has not been properly setup, some env parameters such as API URL is stored in `config.js` inside the `src` folder. So please manually uncommented and use the correct URL in both `MovieDetails.js` and `MovieSearch.js`

`http://localhost:5000`

### `yarn start-client`

Or you may want to run the React client separately without build with this command.

### `cd server && yarn start`

This runs the nodeJS server separately for development purpose.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## API resource

Movie data is provided by `RapidAPI.com`

The API URL is `https://rapidapi.com/amrelrafie/api/movies-tvshows-data-imdb`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
