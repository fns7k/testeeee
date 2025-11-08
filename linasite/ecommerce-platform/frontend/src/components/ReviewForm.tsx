import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ReviewForm = ({ productId }) => {
    const { register, handleSubmit, reset } = useForm();
    const [submissionStatus, setSubmissionStatus] = useState('');

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`/api/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data, productId }),
            });

            if (response.ok) {
                setSubmissionStatus('Review submitted successfully!');
                reset();
            } else {
                setSubmissionStatus('Failed to submit review. Please try again.');
            }
        } catch (error) {
            setSubmissionStatus('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Submit a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="rating">Rating:</label>
                    <select id="rating" {...register('rating', { required: true })}>
                        <option value="">Select a rating</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <textarea id="comment" {...register('comment', { required: true })}></textarea>
                </div>
                <div>
                    <label htmlFor="photo">Upload Photo:</label>
                    <input type="file" id="photo" {...register('photo')} />
                </div>
                <button type="submit">Submit Review</button>
            </form>
            {submissionStatus && <p>{submissionStatus}</p>}
        </div>
    );
};

export default ReviewForm;