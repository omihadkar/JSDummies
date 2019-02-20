var events = require('events');
var util= require('util');

var Person=function(name){
    this.name=name;
}

util.inherits(Person,events.EventEmitter);

var james=new Person('Onkar');
var mary=new Person('mary');

var people=[james,mary];

people.forEach (function(person){
    person.on('speak',function(msg){
        console.log('who spoke '+msg);
    })
})

james.emit('speak','Hey dudes');