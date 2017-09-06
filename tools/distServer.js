import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */

const port = process.env.PORT || 3000 ;
const app = express();

app.use(compression());
app.use(express.static('dist'));

const jsonPath = path.join(__dirname, '../mock/app.json');
const jsonPath1 = path.join(__dirname, '../mock/app1.json')
const jsonPath2 = path.join(__dirname, '../mock/app2.json')
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
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
