import { Document } from 'mongoose';

export interface IbookSchema extends Document {
    title: string;
    titleLength: number;
    description: string;
    code3: string;
    createdAt: string;
    updatedAt: string;
}

export interface IbookData {
    code3: string;
    value: number;
}
