import express from 'express';
import Chart from '.';

/**
 * Express router to mount books related functions on.
 * @type {Express.Router}
 * @const
 */
const booksRouter: express.Router = express.Router();

/**
 * Route serving list of books.
 * @name /v1/books
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
booksRouter.get('/', Chart.chart);

export default booksRouter;
