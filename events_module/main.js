var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log('連接成功');

    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
    console.log('數據接收成功');
})

eventEmitter.emit('connection');

console.log("程序執行完畢。")


