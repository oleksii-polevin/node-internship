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
    response.write('Hello, world');

    response.end();
    console.log('response send');
});

server.listen(port, () => {
    console.log('server is listening ' + port);
});
