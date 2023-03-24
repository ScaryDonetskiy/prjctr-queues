const { Client, BeanstalkJobState } = require('node-beanstalk');

const c = new Client();

c.connect().then(() => {
    c.watch('prjctr').then(() => {
        c.reserveWithTimeout(10).then(job => {
            console.log(job);
            c.delete(job.id);
            c.disconnect();
        });
    });
});
