import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true,
        maxlength: 500
    },
    photos: [{
        type: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Review = model('Review', reviewSchema);

export default Review;