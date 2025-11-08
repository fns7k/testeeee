import { Request, Response } from 'express';
import { Product } from '../../src/models/product.model';
import { createProduct, getProductById, updateProduct, deleteProduct } from '../../src/controllers/productController';

jest.mock('../../src/models/product.model');

describe('Product Controller', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('createProduct', () => {
        it('should create a new product and return it', async () => {
            const req = {
                body: {
                    name: 'Test Product',
                    price: 100,
                    description: 'Test Description',
                },
            } as Request;

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            } as unknown as Response;

            (Product.create as jest.Mock).mockResolvedValue(req.body);

            await createProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(req.body);
        });
    });

    describe('getProductById', () => {
        it('should return a product by id', async () => {
            const req = {
                params: {
                    id: '1',
                },
            } as Request;

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            } as unknown as Response;

            (Product.findById as jest.Mock).mockResolvedValue({ id: '1', name: 'Test Product' });

            await getProductById(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ id: '1', name: 'Test Product' });
        });
    });

    describe('updateProduct', () => {
        it('should update a product and return it', async () => {
            const req = {
                params: {
                    id: '1',
                },
                body: {
                    name: 'Updated Product',
                },
            } as Request;

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            } as unknown as Response;

            (Product.findByIdAndUpdate as jest.Mock).mockResolvedValue({ id: '1', name: 'Updated Product' });

            await updateProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ id: '1', name: 'Updated Product' });
        });
    });

    describe('deleteProduct', () => {
        it('should delete a product and return a success message', async () => {
            const req = {
                params: {
                    id: '1',
                },
            } as Request;

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            } as unknown as Response;

            (Product.findByIdAndDelete as jest.Mock).mockResolvedValue({ id: '1' });

            await deleteProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(204);
            expect(res.json).toHaveBeenCalledWith({ message: 'Product deleted successfully' });
        });
    });
});