var express = require('express');
var bodyParser = require('body-parser');
var mongoose= require('mongoose'); 


//connect to database
mongoose.connect('<connection-string>');

//create schema.
var todoSchema= new mongoose.Schema({
    item: String
});

var Todo=mongoose.model('Todo',todoSchema);

var itemOne= Todo({item:'Get flowers'}).save(function(err){
    if (err) {
        throw err;
    }
    console.log('item saved');
});

var app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())