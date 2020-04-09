import express from 'express';
import Chart from '.';

class UserRouter {
    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.get('/', Chart.chart);
    }
}

// eslint-disable-next-line import/prefer-default-export
export const BooksRouter: express.Router = new UserRouter().router;
