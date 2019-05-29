# fullscript-web-prototype

## Description

Fullscript Web prototype is a website built in React.js to rate Fullscript products and learn more about the company.

## Basic Flow
  1. A user login with their credentialss (provided as placeholders in form)
  2. Press the rate button
  3. A user can rate the available products

## Commands
1. **Run the app**. `yarn start` or `npm start`
2. **Build the app**. `yarn build` or `npm run build`
3. **Lint the app**. `yarn lint` or `npm run lint`
4. **Test the app**. `yarn test` or `npm run test`
5. **Run the app with SSR**. `yarn ssr` or `npm run ssr`

## Getting Started
1. Clone the repository
2. Install dependencies: `yarn` or `npm install`
3. Create the environment variables files in root folder(.env.dev, .env.staging and .env.prod):

  `.env.example` example:
  ```
    API_URL=http://your-api-url.com
  ```
4. Start the dev server: `yarn start` or `npm start -s`

## Technologies

| **Tech** | **Description**
|----------|-------
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.|
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging.|
|  [React Router 4](https://github.com/reactjs/react-router) | A complete routing library for React |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.|
| [Webpack 4](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [React Hot Loader](https://github.com/gaearon/react-hot-loader). |
| [Express](https://github.com/expressjs/express) | Fast, unopinionated, minimalist web framework for node. |
| [Jest](https://facebook.github.io/jest/) | Automated tests with built-in expect assertions and  [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. |
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) for the airbnb style guides. |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more.
| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS |
| [Stylelint](https://github.com/stylelint/stylelint) | Modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets. |
| [Redux React Session](https://github.com/bernabe9/redux-react-session) | Keep your session sync with localStorage and Redux |
| [ReduxForm](http://redux-form.com/6.4.3/) | Redux-form works with React Redux to enable an html form in React to use Redux to store all of its state. |
| [Isomorphic Fetch](https://github.com/matthew-andrews/isomorphic-fetch) |  Is a Promise-based mechanism for programatically making web requests in the browser. |
| [Immutable.js](https://github.com/facebook/immutable-js/) | Immutable persistent data collections for Javascript which increase efficiency and simplicity. |
| [React Intl](https://github.com/yahoo/react-intl/) | Localization for language support. |


## Demo

Want to give it a try? Here's a [demo](https://fullscript-web-prototype.herokuapp.com/login) for you to play with.

Check out the signup input placeholders for credentials.
