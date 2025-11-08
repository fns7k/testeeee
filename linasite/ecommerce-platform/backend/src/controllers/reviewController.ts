import { Request, Response } from 'express';
import Review from '../models/review.model';
import { ReviewData } from '../types/index';

// Get all reviews for a product
export const getReviews = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const reviews = await Review.find({ productId });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
};

// Add a new review
export const addReview = async (req: Request, res: Response) => {
    try {
        const reviewData: ReviewData = req.body;
        const newReview = new Review(reviewData);
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: 'Error adding review', error });
    }
};

// Update a review
export const updateReview = async (req: Request, res: Response) => {
    try {
        const { reviewId } = req.params;
        const updatedReview = await Review.findByIdAndUpdate(reviewId, req.body, { new: true });
        if (!updatedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: 'Error updating review', error });
    }
};

// Delete a review
export const deleteReview = async (req: Request, res: Response) => {
    try {
        const { reviewId } = req.params;
        const deletedReview = await Review.findByIdAndDelete(reviewId);
        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review', error });
    }
};