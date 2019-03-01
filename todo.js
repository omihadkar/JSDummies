var express= require('express');

var todoController= require('./Controller/todoController');

var app= express();

var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

todoController(app);

app.listen(3000);
console.log('Listnening on port 3000.')