import mongoose from 'mongoose';
import connections from '../../config/connection';
import { IbookSchema } from './interfaces';

const BooksSchema: mongoose.Schema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
        },
        titleLength: {
            type: Number,
            required: false,
        },
        description: {
            type: String,
            required: true,
        },
        code3: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            required: true,
        },
        updatedAt: {
            type: Date,
            required: true,
        },
    },
    {
        collection: 'booksmodel',
        versionKey: false,
    },
);

const BooksModel: mongoose.Model<IbookSchema> = connections.model<IbookSchema>('BooksModel', BooksSchema);

export default BooksModel;
