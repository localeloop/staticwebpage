import React, { useEffect, useState, useRef } from 'react';
import { ReviewCard, ReviewerName, ShowMore } from './styles';
import StarRating from './StarRating';

interface Review {
    reviewId: string;
    reviewer: {
      profilePhotoUrl: string;
      displayName: string;
    };
    starRating: number;
    comment: string;
    createTime: string;
    updateTime: string;
}

const ReviewCardComponent = ({ review }: { review: Review }) => {
    const [isTruncated, setIsTruncated] = useState(review.comment.length > 150);
    const [showFullText, setShowFullText] = useState(false);

    const handleShowMore = () => {
        setShowFullText(true);
        setIsTruncated(false); // No need to truncate once "Show More" is clicked
    };

    return (
        <ReviewCard key={review.reviewId}>
            <div>
                <ReviewerName>
                    <img src={review.reviewer.profilePhotoUrl} alt={review.reviewer.displayName} />
                    <h3>{review.reviewer.displayName}</h3>
                </ReviewerName>
                <StarRating rating={review.starRating} />
                <p>
                    {isTruncated && !showFullText ? `${review.comment.slice(0, 150)}...` : review.comment}
                </p>
                {isTruncated && !showFullText && <ShowMore onClick={handleShowMore}>Show More</ShowMore>}
            </div>
        </ReviewCard>
    );
};

export default ReviewCardComponent;