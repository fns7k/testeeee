import fs from 'fs';
import csvParser from 'csv-parser';
import { Product } from '../models/product.model';

export const uploadCsv = (filePath: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const products: Product[] = [];

        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (data) => {
                products.push(data);
            })
            .on('end', () => {
                // Here you would typically save the products to the database
                // For example: await Product.insertMany(products);
                resolve();
            })
            .on('error', (error) => {
                reject(error);
            });
    });
};