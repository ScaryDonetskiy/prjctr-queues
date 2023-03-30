const { Client, BeanstalkJobState } = require('node-beanstalk');
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const c = new Client({
    host: 'beanstalkd-persist',
    port: 11300
});

c.connect().then(() => {
    const server = http.createServer((req, res) => {
        c.use('prjctr').then(() => {
            c.put({foo: 'payload'}, 40).then(putJob => {
                if (putJob.state !== BeanstalkJobState.ready) {
                    throw new Error('job is not in ready state');
                }

                c.watch('prjctr').then(() => {
                    c.reserveWithTimeout(10).then(job => {
                        console.log(job);
                        c.delete(job.id);

                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/plain');
                        res.end(JSON.stringify(job));
                    });
                });
            })
        });
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});
