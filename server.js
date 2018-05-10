var path = require('path');
var express = require('express');
var fs = require('fs');
var sharp = require('sharp');

const app = express()

const imageDir = path.resolve(__dirname, './images/')

app.get('/', function(req, res, next) {
  const files = fs.readdirSync('./images/').filter(img=>img !== "@eaDir");
  const rand = files[Math.floor(Math.random() * files.length)];  
  res.sendFile('/mnt/boron/teamspeak-images/images/' + rand);
});


app.listen(3000, () => console.log('Listening on 3000)'))
