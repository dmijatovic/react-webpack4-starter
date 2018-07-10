# React webpack 4 (simple) starter template

This is simple webpack 4 starter with scss enabled. At the moment of creating this starter create-react-app cli used webpack v3. I created this starter testing webpack 4 approach and some personal preferences.

I will probably use create-react-app cli when it is upgraded to use webpack v4. For now this simple starter is used to learn webpack 4 and the integration of react.js with webpack v4.

I started completely from scratch taking the latest versions avaliable at the time (2018-07-07).

## NPM installation scripts

Just run `npm install` and all libs mentioned below will be installed.

```bash
  # 1. install webpack
  npm i webpack webpack-cli webpack-dev-server -D
  # 2. install react dom
  npm i react react-dom --save
  # 3. install babel loaders
  npm i babel-cli babel-loader babel-preset-react babel-preset-stage-3 -D
  # 4. install scss/css loaders 
  npm i node-sass sass-loader css-loader mini-css-extract-plugin -D
  # 5. install post css loader, autoprefixer 
  npm i postcss-loader autoprefixer -D
  # 6. install other webpack util plugins
  npm i html-webpack-plugin copy-webpack-plugin uglifyjs-webpack-plugin clean-webpack-plugin -D
  # 7. install testing suite Jest & Enzyme
  npm i -D jest babel-jest babel-preset-env enzyme enzyme-adapter-react-16
  # 8. install redux
  npm i -S redux react-redux

```

## NPM scripts

- `npm start:` start webpack in watch mode passing dev environment (--env=dev).
- `npm run dev:` start webpack-dev-server using dev environment (--env=dev)
- `npm run build-dev:` Build development version.
- `npm run build-prod:` Build production version to dist folder. Note that previous build will be removed first.
- `npm test`: to run tests with Jest & Enzyme

## Webpack config scripts

Webpack configuration is stored in webpack folder. Initially 2 separate def files are created. Based on --env parameter passed on init one of the configuration files is loaded as webpack config module (see webpack.config.js)

- `dev:` this is development environment setup (webpack/dev.js)
- `prod:` this is production build setup (webpack/prod.js).

**Note! Configuration is not 'shared' between files. When updating, please adjust/update the properties in both files where needed.**

BTW: I have chosen here simpler approach with some code duplication above more complex setup (without code duplication).

## Git branches

Master will have same content as base setup. 

- master: same as base. 
- base: basic rect-dom setup with support for scss, postcss, fonts and images.
- jest: basic + jest and enzyme test suite setup
- router: setup extended with react-router
- redux: setup extended with redux
- material: setup extended with react-material lib
- dev: development branch


## Testing
For testing this project uses Jest and Enzyme. Basic Jest definitions are taken from create-react-app scripts. The mockup scripts are in jest folder and the jest configuration is in package.json.