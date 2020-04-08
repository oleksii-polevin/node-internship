import express from 'express';
import middleware from '../config/middleware';
import routes from '../config/router';

/**
 * @type {express}
 * @constant {express.Application}
 */
const app: express.Application = express();

/**
 * @description express.Application Middleware
 */
middleware(app);

/**
 * @description express.Application Routes
 */
routes(app);

/**
 * @description sets port 3000 to default or unless otherwise specified in the environment
 */
app.set('port', process.env.PORT || 3000);

export default app;
