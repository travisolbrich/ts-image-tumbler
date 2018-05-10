var path = require('path');
var express = require('express');
var fs = require('fs');
var sharp = require('sharp');

const app = express()

const imageDir = path.resolve(__dirname, './images/')
var i = 0;

app.get('/', function(req, res, next) {
  const files = fs.readdirSync('./images/').filter(img=>img.endsWith('.png'))
  
  if(i < files.length - 1) {
    i++;
  } else {
    i = 0;
  } 

  const chosenImage = files[i];
  console.log("(" + (i+1) + " of " + files.length + ") " + chosenImage);  
  
  var image = fs.readFileSync('./images/' + chosenImage);
  sharp(image)
    .resize(400, 400)
    .max()
    .toBuffer()
    .then(data => res.end(data, 'image/png'))
    .catch(err => console.err('someone broke something (probably rota) ' + err));
});

app.listen(8080, () => console.log('Listening on 8080'))
