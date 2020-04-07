import mongoose from 'mongoose';
import connections from '../../config/connection';

export interface IbookSchema extends mongoose.Document {
    title: string;
    titleLength: number;
    description: string;
    code3: string;
    createdAt: string;
    updatedAt: string;
}

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

export const BooksModel: mongoose.Model<IbookSchema> = connections.model<IbookSchema>('BooksModel', BooksSchema);
