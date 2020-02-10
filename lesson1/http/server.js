const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.log(err);
        response.statusCode = 400;
        response.end();
    });
    request.on('data', (chunk) => {
        body.push(chunk);
    });
    request.on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
    });
    response.on('error', (err) => {
        console.error(err);
    });
    if (request.method === 'GET') {
        response.write('used GET method');
    } else {
        response.write('used POST method');
    }

    response.end();
    console.log('response has sent');
});

server.listen(port, () => {
    console.log('server is listening ' + port);
});
