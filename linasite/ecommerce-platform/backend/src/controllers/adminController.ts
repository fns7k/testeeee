import { Request, Response } from 'express';
import Product from '../models/product.model';
import Order from '../models/order.model';
import { uploadCsv } from '../services/csvService';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
};

export const addProduct = async (req: Request, res: Response) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error adding product' });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error updating product' });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: 'Error deleting product' });
    }
};

export const uploadProductsCsv = async (req: Request, res: Response) => {
    try {
        const result = await uploadCsv(req.file);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error uploading CSV' });
    }
};

export const getOrders = async (req: Request, res: Response) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders' });
    }
};