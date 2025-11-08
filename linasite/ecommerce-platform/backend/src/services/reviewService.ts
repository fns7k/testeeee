import { Review } from '../models/review.model';
import { Product } from '../models/product.model';

export const getReviewsByProductId = async (productId: string): Promise<Review[]> => {
    return await Review.find({ productId });
};

export const addReview = async (productId: string, reviewData: Partial<Review>): Promise<Review> => {
    const review = new Review({ productId, ...reviewData });
    return await review.save();
};

export const updateReview = async (reviewId: string, reviewData: Partial<Review>): Promise<Review | null> => {
    return await Review.findByIdAndUpdate(reviewId, reviewData, { new: true });
};

export const deleteReview = async (reviewId: string): Promise<Review | null> => {
    return await Review.findByIdAndDelete(reviewId);
};

export const getAverageRating = async (productId: string): Promise<number> => {
    const reviews = await Review.find({ productId });
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return reviews.length ? totalRating / reviews.length : 0;
};