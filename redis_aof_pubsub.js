const { createClient } = require('redis');
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const client = createClient({
    url: 'redis://@redis-aof:6379'
});

client.connect().then(() => {
    const server = http.createServer((req, res) => {
        client.publish('prjctr', JSON.stringify({foo: 'payload'})).then(() => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('published');
        });
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});