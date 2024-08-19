import React, { useEffect, useState } from 'react';
import { ReviewsContainer, CardContainer, ReviewCard, ReviewerName, Header } from './styles';
import ReviewCardComponent from './ReviewCard';
import Marquee from 'react-fast-marquee';

interface Review {
    averageRatimg: number;
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

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('https://featurable.com/api/v1/widgets/9a934c27-92dc-4ee9-b419-b8c037ddcefc');
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError('Failed to fetch reviews');
      }

      finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (isLoading) {
    return <div>loading...</div>
  }

  if (error){
    return <div>{error}</div>
  }

  return (
    <ReviewsContainer>
      <Marquee speed={75} pauseOnHover={true} pauseOnClick={true}>
        <CardContainer>
          {reviews && reviews.map((review) => (
            <ReviewCardComponent key={review.reviewId} review={review} />
          ))}
        </CardContainer>
      </Marquee>
    </ReviewsContainer>
  );
};

export default Reviews;