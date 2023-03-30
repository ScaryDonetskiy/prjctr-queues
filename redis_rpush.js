const { createClient } = require('redis');
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const client = createClient({
    url: 'redis://@redis:6379'
});

client.connect().then(() => {
    const server = http.createServer((req, res) => {
        client.rPush('prjctr', JSON.stringify({foo: 'payload'})).then(() => {
            client.lPop('prjctr').then(value => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(value);
            });
        });
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});