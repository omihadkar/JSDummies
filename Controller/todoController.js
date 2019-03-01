
var data=[{item: 'get milk'},{item: 'walk dog'},{item: 'kick some thing.'}]

// var bodyParser= require('body-parser');
// var urlencodedParser =bodyParser.json({ type: 'application/*+json' });

module.exports=function(app){

    app.get('/todo',function(req,res){
        res.send(data);
    });

    app.post('/todo',function(req,res){
        res.setHeader('Content-Type', 'text/plain')
        console.log(req.body);
       // data.push(req.body);
       // res.end(data);
       data.push(req.body);
       res.end(JSON.stringify(req.body, null, 2))
    });

    app.delete('/todo',function(req,res){
        
    });

};