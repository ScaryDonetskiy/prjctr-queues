const { createClient } = require('redis');

const client = createClient({
    url: 'redis://@localhost:63791'
});

client.connect().then(() => {
    const listener = (message, channel) => {
        console.log(message, channel);
        client.quit();
    };
    client.subscribe('prjctr', listener);
});