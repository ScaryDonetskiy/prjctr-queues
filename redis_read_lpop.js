const { createClient } = require('redis');

const client = createClient({
    url: 'redis://@localhost:63791'
});

client.connect().then(() => {
    client.lPop('prjctr').then(value => {
        console.log(value);
        client.quit();
    });
});