const { Client, BeanstalkJobState } = require('node-beanstalk');

const c = new Client();

c.connect().then(() => {
    c.use('prjctr').then(() => {
        c.put({foo: 'payload'}, 40).then(putJob => {
            if (putJob.state !== BeanstalkJobState.ready) {
                throw new Error('job is not in ready state');
            }

            c.disconnect();
        })
    });
});
