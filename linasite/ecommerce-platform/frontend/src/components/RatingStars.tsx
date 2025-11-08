import React from 'react';

interface RatingStarsProps {
    rating: number;
    onRatingChange?: (newRating: number) => void;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, onRatingChange }) => {
    const stars = Array(5).fill(0);

    const handleClick = (index: number) => {
        if (onRatingChange) {
            onRatingChange(index + 1);
        }
    };

    return (
        <div>
            {stars.map((_, index) => (
                <span
                    key={index}
                    onClick={() => handleClick(index)}
                    style={{ cursor: 'pointer', color: index < rating ? '#FFD700' : '#ccc' }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default RatingStars;