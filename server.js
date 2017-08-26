const path = require('path')
const express = require('express')
const app = express();


const indexPath = path.join(__dirname, './dist/index.html');
const jsonPath = path.join(__dirname, './app.json');
const jsonPath1 = path.join(__dirname, './app1.json')
const jsonPath2 = path.join(__dirname, './app2.json')

const publicPath = express.static(path.join(__dirname, './dist'))

app.use('/dist', publicPath);
app.get('/api', function (req, res) {


   // ame dummy condition to filter out json
   // dummy conditions to render json files
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
app.get('*', function (req, res) { res.sendFile(indexPath) });
const port = (process.env.PORT || 3014);

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
