const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
    let data = fs.readFileSync(path.resolve(__dirname + "/public", 'proverbs.json'));
    let proverbs = JSON.parse(data); 
    let number = Math.floor(Math.random() * (proverbs.length + 1));
    let proverb = proverbs[number].proverb;
    let translation = proverbs[number].translation;
    res.render('index.pug', { proverb, translation});
});

app.listen(PORT);