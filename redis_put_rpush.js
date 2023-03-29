const { createClient } = require('redis');

const client = createClient({
    url: 'redis://@localhost:63791'
});

client.connect().then(() => {
    client.rPush('prjctr', JSON.stringify({foo: 'payload'})).then(() => {
        client.disconnect();
    });
});