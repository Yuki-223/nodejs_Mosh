const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a Listener
emitter.on('messageLogged', (arg) => {
    console.log('something is happened');
    console.log(arg()());
});

// Raise an event
emitter.emit('messageLogged', () =>{
    return () => {
        return {
            id: 1,
            url: 'http'
        };
    }
});