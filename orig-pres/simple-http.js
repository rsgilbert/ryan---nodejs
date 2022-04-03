const http = require('http')

// test using: curl -i http://localhost:8000
http.createServer(function (req, res) {
    res.setHeader('statusCode', 204);
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello', () => console.log('wrote hello'))
    // hang request
    setTimeout(function() { 
        res.write(' World!', () => console.log('wrote world'));
        res.end('#ENDED');
        res.emit('close');
    }, 2000);
    

})
.listen(8000);