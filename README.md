## Welcome to "Checkusout" my example review site!

This app just uses Create React App but also has the convenience of a Dockerfile so you can run the built application within a Docker container.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
The app is ready to be deployed!

## To run with Docker

The Dockerfile has been created to handle the production build and environment in one process, so there is no need to run `yarn build` before running Docker.

### `docker build . -t checkusout`

This command instructs Docker to create an image.

### `docker run -p 8080:80 checkusout`

Runs the image locally, now simply navigate to `http://localhost:8080` in your browser!

## Packages/Tech Used

- `create-react-app` - A great starting point for creating a React SPA, contains everything you need for most projects and with the option to `eject` if you need to customise it further.
- `React Hooks` - I decided to not use any state management like `Redux` for this test as it is a bit overkill and so decided to just use some of the new React Hooks `useContext` and `useReducer` instead. These are a very simple way of managing an app's state, however for a larger project with more complex state, I would use `Redux`, even just for it's `DevTools` debugger for Chrome!
- `React Router` - Not really necessary for the project, but I decided to add routing to simulate most review sites and show that I am comfortable with routing in React.
- `React Helmet` - Used to change values within the `<head>` for each route, I've only used it to change the page title in this project.
- `React Testing Library` - Used for testing React DOM components.
- `CSS Modules` - My prefered way of styling components.
- `SCSS` - For this simple project, I opted to use SCSS as I like to utilise it's mixins and functions etc, however should the project require me to dynamically change variables for theming etc, then I would use CSS custom properties.
- `classnames` - A really useful package to help generate dynamic class names for components.
- `Lodash` - Used for a few helper functions, saves writing them yourself!
- `Formik` - Makes building forms in React simple!
- `Yup` - Used with `Formik` to specify the form schema and validation rules.
- `React Stars` - For the displaying of reviews, I wanted to code my own star rating component, which I did, but due to time constraints I opted to use this package for submitting a rating.
