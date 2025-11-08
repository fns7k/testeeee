import React from 'react';
import { Review } from '../types';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review-item">
            <h4>{review.title}</h4>
            <div className="review-rating">
              <span>{'★'.repeat(review.rating)}</span>
              <span>{'☆'.repeat(5 - review.rating)}</span>
            </div>
            <p>{review.comment}</p>
            {review.photo && <img src={review.photo} alt="Review" />}
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;