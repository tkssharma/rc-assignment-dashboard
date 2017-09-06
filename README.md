# React App with Redux

Application to show Dashboard or to fetch data on UI

  - React with redux state manager + ES6 components
  - Redux container components with nested child components
  - Responsive flex design
  - Redux state container with redux thunk promises
  - SCSS used with webpack loader and babel as transpiler
  - enzyme used for component testing
  - Webpack HMR being used with express to render application on localhost
  - Reading static json with differnt /API url with filters being passes

### Running Application with Yarn/NPM with Node > 6.x.x

-  npm run install
-  npm run start:dev
-  npm run start:prod


Application setup
==============
- App require NPM Node installed

```Javascript
  "devDependencies": {
    "babel": "6.5.2",
    "babel-eslint": "^7.1.1",
    "babel-loader": "6.2.5",
    "babel-plugin-antd": "0.5.1",
    "babel-preset-es2015": "6.14.0",
    "babel-preset-react": "^6.5.0",
    "babel-preset-react-hmre": "^1.1.1",
    "babel-preset-stage-0": "^6.5.0",
    "babel-preset-stage-1": "6.13.0",
    "css-loader": "^0.23.1",
    "file-loader": "^0.8.5",
    "sass-loader": "^3.2.0",
    "style-loader": "^0.13.1",
    "url-loader": "^0.5.6",
    "webpack": "^1.12.14",
    "webpack-dev-middleware": "^1.6.1",
    "webpack-dev-server": "1.16.1",
    "webpack-hot-middleware": "^2.10.0"
  },
  "dependencies": {
    "antd": "^2.12.7",
    "axios": "^0.16.2",
    "babel-core": "^6.22.1",
    "body-parser": "^1.15.2",
    "express": "^4.14.0",
    "extract-text-webpack-plugin": "^0.8.2",
    "file-loader": "^0.10.1",
    "history": "4.2.0",
    "immutable": "3.8.1",
    "jest": "^19.0.2",
    "less": "^2.5.1",
    "less-loader": "^2.2.3",
    "node-sass": "^3.2.0",
    "react": "^15.3.0",
    "react-addons-test-utils": "^15.4.2",
    "react-dom": "^15.3.0",
    "react-redux": "^4.4.0",
    "react-router-redux": "4.0.6",
    "redux": "^3.6.0",
    "redux-thunk": "^2.2.0",
    "sass-loader": "^1.0.2",
    "scss-compile": "^0.1.7",
    "throttle-debounce": "^1.0.1"
  }

```

```Javascript
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {

    entry: [
    APP_DIR + '/index.js'
     ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: './dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: '/node_modules/',
                include: APP_DIR,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['antd']
                }
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!sass-loader"
            }, {
                test: /\.less?$/,
                loaders: [
                    'style-loader', 'css-loader', 'less-loader?{"sourceMap":true}'
                ],
                include: __dirname
            }, {
                test: /\.(png|jpg|ttf|eot)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000'
            },
               {
                  test: /\.json$/,
                  loader: 'json',
                },
        ]
    },
    resolve: {
        alias: {
            app: APP_DIR
        }
    },
    node: {
        net: 'empty',
        dns: 'empty'
    }
};

module.exports = config;

```

once application running on localhost :
http://localhost:3014


Contact
====================
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/MARTIN2.png" />](http://gennexttraining.herokuapp.com/)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/github.png" />](https://github.com/tkssharma)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/mail.png" />](mailto:tarun.softengg@gmail.com)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/linkedin.png" />](https://www.linkedin.com/in/tkssharma)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/twitter.png" />](https://twitter.com/tkssharma)
