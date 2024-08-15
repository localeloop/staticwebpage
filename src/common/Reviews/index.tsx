import React, { useEffect, useState } from 'react';
import { ReviewsContainer, CardContainer, ReviewCard, ReviewerName, Header } from './styles';
import Container from '../../common/Container';
import StarRating from './StarRating';
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

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://featurable.com/api/v1/widgets/9a934c27-92dc-4ee9-b419-b8c037ddcefc');
        const data = await response.json();
        setAverageRating(data.averageRating);
        setReviews(data.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
    
    console.log( reviews );
  }, []);

  return (
    <>
        <ReviewsContainer>
            <Marquee speed={75} pauseOnHover={true} pauseOnClick={true}>
                <CardContainer>
                    {reviews.map((review) => (
                        <ReviewCardComponent key={review.reviewId} review={review} />
                    ))}
                </CardContainer>
            </Marquee>
        </ReviewsContainer>
        <Header><h1>Average Rating:</h1><StarRating rating={averageRating}/></Header>
    </>
  );
};

export default Reviews;