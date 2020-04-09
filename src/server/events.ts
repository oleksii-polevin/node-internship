import http from 'http';

/**
 * @function
 * @param  {NodeJS.ErrnoException} error
 * @param  {number|string|boolean} port
 * @returns throw error
 */
function onError(error: NodeJS.ErrnoException, port: number | string | boolean): void {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bindPort: number | string = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    switch (error.code) {
        case 'EACCES':
            console.error(`${bindPort} requires elevated privileges`);
            process.exit(1);
        case 'EADDRINUSE':
            console.error(`${bindPort} is already in use`);
            process.exit(1);
        default:
            throw error;
    }
}
/**
 * @function
 * @inner
 * @description log port to console
 */
function onListening(): void {
    const addr: any = this.address();
    const bindPort: number | string = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;

    console.log(`Listening on ${bindPort}`);
}

/**
 * @function
 * @inner
 * @param {http.Server} Server
 * @param {number} port
 */
function bind(Server: http.Server, port: number): void {
    Server.on('error', (error: NodeJS.ErrnoException) => this.onError(error, port));
    Server.on('listening', this.onListening.bind(Server));
}

export default {
    onError,
    onListening,
    bind,
};
