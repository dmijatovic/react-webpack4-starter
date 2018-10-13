# React webpack 4 (simple) starter template

This is simple webpack 4 starter with scss enabled and babel version 7. Note that this simple starter gets more complex on each version increase :-).

I started completely from scratch taking all latest versions avaliable at the time (2018-07-07). On 2018-10-13 the version 2 is created which upgrades to Babel version 7 and further extends the possibilities of this starter.

## NPM installation scripts

Just run `npm install` and all libs mentioned below will be installed.

```bash
  # 1. install react dom
  npm i -s react react-dom @babel/polyfill
  # 2. install webpack modules
  npm i -D webpack webpack-cli webpack-dev-server webpack-bundle-analyzer
  # 3a. install babel loaders - basics v7
  npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react
  # 3b. install babel loaders - used features v7
  npm i -D @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
  # 4a. install scss/css loaders - basics
  npm i -D node-sass sass-loader css-loader mini-css-extract-plugin
  # 4b. install post-css loaders
  npm i -D optimize-css-assets-webpack-plugin postcss-loader postcss postcss-preset-env autoprefixer cssnano
  # 5. install other webpack util plugins
  npm i -D html-webpack-plugin url-loader file-loader copy-webpack-plugin uglifyjs-webpack-plugin clean-webpack-plugin

```

## NPM scripts

- `npm start:` start webpack in watch mode passing dev environment (--env=dev).
- `npm run dev:` start webpack-dev-server using dev environment (--env=dev)
- `npm run build:dev:` Build development version.
- `npm run build:` Build production version to dist folder. Note that previous build will be removed first.

## Webpack config scripts

Webpack configuration is stored in webpack folder. Initially 2 separate def files are created. Based on --env parameter passed on init one of the configuration files is loaded as webpack config module (see webpack.config.js)

- `dev:` this is development environment setup (webpack/dev.js)
- `prod:` this is production build setup (webpack/prod.js).

**Note! Configuration is not 'shared' between files. When updating, please adjust/update the properties in both files where needed.**

BTW: I have chosen here simpler approach with some code duplication above more complex setup (without code duplication).

## Folder Structure

- **`assets`**: all asset files used like original logo and other images etc. Excel template for creating json files is also here.
- **`dist`**: builds are here
- **`src`**: holds all react code to be processed by webpack. **All js/css files need to be inside `src` folder**, otherwise Webpack won’t see them.
    - **component**: holds shared/general react components used by multiple pages
    - **layout**: holds react components which define global page layout
    - **page**: holds react components that represent pages (uniek in design/composition)
    - **router**: holds defined routes, react router setup and main router component. This router component is then integrated into main/global layout component.
    - **store**: holds all redux files used to setup redux store including implementation of custom middleware functions.
    - **styles**: holds css (js possible too) files related to defining global styles, overrides, css variables etc.
    - **utils**: holds uitility function
- **static**: static files that will be included in the build
- **webpack**: webpack configuration file from react-scipts

## Git branches

Master will have same content as base setup.

- master: same as base.
- base: basic rect-dom setup with support for scss, postcss, fonts and images.
- jest: basic + jest and enzyme test suite setup
- router: setup extended with react-router
- redux: setup extended with redux
- material: setup extended with react-material lib
- dev: development branch

## Setup gotcha's :-)

### Webpack plugins

Some plugins depend on the other webpack or third party plugins. In some cases it is not sufficient to use only webpack plugin! Examples

- url-loader depends on file-loader at the moment you set the limit on file size that can be added as base64 into js file.
- postcss-loader depends on third party poscss module which in turns is collection of hondrets of modules that need to be 'pulled' separately. For example if you want to apply autoprefixing through webpack you need: postcss, postcss-loader and autoprefixer.
- babel polyfill need to be project dependency as it is shipped with the project.

### Browser support

To provide support for various browsers javasript as well as CSS need to be transpiled to legacy code. To share the information about the required browser support among different modules and plugins the [browserlist](https://browserl.ist/?q=last+2+version%2C%3E+1%25%2Cnot+IE+10) is invented. So far I only got this working as prop in package.json although there are number of different ways to expose the configuration to different plugins/modules/bundlers/transpilers etc.

```json
  "browserslist": [
    "last 2 version",
    "> 1%",
    "not IE 10"
  ]
```

To validate things work properly run

```bash
   # check browser list for post-css autoprefixer
   npx browserslist
```

### ESLint

