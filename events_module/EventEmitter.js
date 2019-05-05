//  寫法 1
var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('some_event', function(){
    console.log('some_event 事件觸發');
})

setTimeout(function(){
    eventEmitter.emit('some_event');
}, 1000)
  

// 寫法 2
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function(){
    console.log('some_event 事件觸發');
})

setTimeout(function(){
    event.emit('some_event');
}, 2000)
