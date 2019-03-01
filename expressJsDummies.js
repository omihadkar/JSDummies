var express= require('express');
var bodyParser= require('body-parser');

var app= express();

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/',function(req,res){
    res.send('this is the homepage.');
});

app.get('/contact',function(req,res){
    res.send('this is the homepage.');
});

app.post('/login', urlencodedParser, function (req, res) {
    console.log('In login');
    if (!req.body) return res.sendStatus(400)

    res.send('welcome, ' + req.body)
  });



app.listen(3000);
console.log('Got it..')