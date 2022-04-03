// Based on Ryan Dahl: Original Node.js presentation youtube video 
// At moment 18:45

// A program that prints 'hello', waits 2 seconds, outputs 'world' and then exits.

const sys = require('sys');

setTimeout(function() {
    sys.log('world')
}, 2000);

sys.log('hello');

