import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = process.env.PORT || 3001;
const app = express();
const compiler = webpack(config);


const jsonPath = path.join(__dirname, '../mock/app.json');
const jsonPath1 = path.join(__dirname, '../mock/app1.json')
const jsonPath2 = path.join(__dirname, '../mock/app2.json')

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.get('/api', function (req, res) {

   if(req.query.name && req.query.location && req.query.company) {
      res.sendFile(jsonPath2)
   }else if(req.query.location){
      res.sendFile(jsonPath1)
   }else if(req.query.name){
      res.sendFile(jsonPath1)
   }else {
      res.sendFile(jsonPath)
   }
});

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
