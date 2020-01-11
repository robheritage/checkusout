## Welcome to my Review Site Example app

This app just uses Create React App but also has the convenience of a Dockerfile so you can run the built application within a Docker container.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## To run with Docker

The Dockerfile has been created to handle the production build and environment in one process, so there is no need to run `yarn build` before running Docker.

### `docker build . -t review-site-example`

This command instructs Docker to create an image.

### `docker run -p 8080:80 review-site-example`

Runs the image locally, now simply navigate to `http://localhost:8080` in your browser!

