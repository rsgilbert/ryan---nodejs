const net = require('net');

const s = net.createServer();

s.addListener('connection', function(conn) {
    console.log('Connected');
    // conn.
    conn.write('Hi there!');
    // conn.end()
    // conn.send('Hello!!'); // no such method
    // conn.close();
});

s.listen(8000);
