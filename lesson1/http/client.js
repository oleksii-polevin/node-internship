const http = require('http');

const options = {
    host: 'localhost',
    port: 3000,
    method: 'GET'
};

// some string for post request
const data = JSON.stringify('request from client');

const postOptions = {
    host: 'localhost',
    port: 3000,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

// GET request
const callback = ((response) => {
    console.log('client is runnung\r\n');
    let body = [];
    response.on('data', (chunk) => {
        body.push(chunk);
    });

    response.on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
    });
});

const req = http.request(options, callback);
req.end();

// POST
const reqPost = http.request(postOptions, (res) => {
    res.on('error', error => {
        console.error(error);
    });
    res.on('data', d => {
        console.log(res.statusCode);
        process.stdout.write(d + '\r\n');
    });
});
reqPost.write(data);
reqPost.end();
