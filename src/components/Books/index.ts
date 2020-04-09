import express from 'express';
import BookService from './service';
import { IbookData } from './interfaces';

export default class Chart {
    /**
     * @function
     * @param {express.Request} req
     * @param {express.Response} res
     * @param {express.NextFunction} next
     * @returns {Promise < any >}
     */
    public static async chart(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ): Promise<any> {
        try {
            const books: IbookData[] = await BookService.getChartData();
            return res.status(200).json({ data: books });
        } catch (error) {
            res.status(500).json({
                message: error.name,
                details: error.message,
            });

            return next(error);
        }
    }
}
