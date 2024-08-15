import React from 'react';
import styled from 'styled-components';

interface StarRatingProps {
  rating: number;
}

const StarContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Star = styled.span`
    color: gold;
    font-size: 2.2rem;
`;

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const renderStars = () => {
        const stars = [];

        for ( let i=0; i<fullStars; i++){
            stars.push(<Star key={`full-${i}`}>&#9733;</Star>);
        }

        if (hasHalfStar) {
            stars.push(<Star key={`half`}>&#9734;</Star>);
        }

        return stars;
    }

    return (
        <StarContainer>
            {renderStars()}
        </StarContainer>
    );
}

export default StarRating;