var events = require('events');

var myEmitter= new  events.EventEmitter();

myEmitter.on('some',function(msg){
    console.log(msg);
    
})

myEmitter.emit('some','Hello Hi..');
