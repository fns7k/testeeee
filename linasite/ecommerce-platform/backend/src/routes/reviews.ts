import { Router } from 'express';
import { 
    getReviews, 
    addReview, 
    updateReview, 
    deleteReview 
} from '../controllers/reviewController';

const router = Router();

// Route to get all reviews for a product
router.get('/:productId', getReviews);

// Route to add a new review
router.post('/:productId', addReview);

// Route to update an existing review
router.put('/:reviewId', updateReview);

// Route to delete a review
router.delete('/:reviewId', deleteReview);

export default router;