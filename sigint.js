const log = console.log; 

// A demonstration of the process object in nodejs 
// And how you set a signal handler for the interrupt signal SIGINT 

setInterval(function() {
    log('hello')
}, 500);

// process object emits events when it receives a signal 
// Ctrl+C on Windows emits SIGINT signal.
process.addListener('SIGINT', function() {
        log('Goodbye');
        // If we dont exit program will continue
        process.exit(0);
    }
);