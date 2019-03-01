var express= require('express');

var todoController= require('./Controller/todoController');

var app= express();
var bodyParser= require('body-parser');

app.use(bodyParser.json({ type: 'application/*+json' }))

todoController(app);

app.listen(3000);
console.log('Listnening on port 3000.')