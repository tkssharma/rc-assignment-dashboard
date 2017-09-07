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
"scripts": {
  "prerun": "babel-node tools/startMessage.js",
  "start:dev": "npm-run-all prerun test build:dev startServer:dev",
  "startServer:dev": "babel-node tools/srcServer.js",
  "test": "mocha --reporter progress tools/testSetup.js src/*.test.js",
  "test:watch": "npm run test -- --watch",
  "build:dev": "babel-node tools/devBuild.js",
  "start:prod": "npm-run-all prerun clean-dist test build:html  build:prod startServer:prod",
  "clean-dist": "npm run remove-dist && mkdir dist",
  "remove-dist": "node_modules/.bin/rimraf ./dist",
  "build:html": "babel-node tools/buildHtml.js",
  "build:prod": "babel-node tools/prodBuild.js",
  "startServer:prod": "babel-node tools/distServer.js"
},
"author": "tkssharma",
"license": "MIT",
"dependencies": {
  "antd": "^2.13.0",
  "axios": "^0.16.2",
  "babel-polyfill": "6.8.0",
  "bootstrap": "3.3.6",
  "jquery": "2.2.3",
  "less-loader": "^4.0.5",
  "node-sass": "^4.5.3",
  "react": "15.0.2",
  "react-autosuggest": "^9.3.2",
  "react-dom": "15.0.2",
  "react-redux": "4.4.5",
  "react-router": "2.4.0",
  "react-router-redux": "4.0.4",
  "redux": "3.5.2",
  "redux-thunk": "2.0.1",
  "sass-loader": "^6.0.6",
  "scss-loader": "^0.0.1",
  "toastr": "2.1.2",
  "webpack-dev-server": "^2.7.1"
}

```
- Webpack with HotModuleReplacementPlugin


```Javascript
import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/src', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {
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
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  }
};
```

once application running on localhost :
http://localhost:port


Contact
====================
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/MARTIN2.png" />](http://gennexttraining.herokuapp.com/)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/github.png" />](https://github.com/tkssharma)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/mail.png" />](mailto:tarun.softengg@gmail.com)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/linkedin.png" />](https://www.linkedin.com/in/tkssharma)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/twitter.png" />](https://twitter.com/tkssharma)
