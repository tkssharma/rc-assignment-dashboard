const path = require('path')
const express = require('express')
const app = express();


const indexPath = path.join(__dirname, './dist/index.html');
const jsonPath = path.join(__dirname, './app.json')
const publicPath = express.static(path.join(__dirname, './dist'))

app.use('/dist', publicPath)
app.get('/api', function (req, res) { res.sendFile(jsonPath) });
app.get('*', function (req, res) { res.sendFile(indexPath) });

const port = (process.env.PORT || 8083)
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: './dist'
  }))
}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
