import React, { useRef } from 'react';
import styled from 'styled-components';

const Card = ({ title = "Service Title", body = "Service description goes here.", image = null }) => {
  return (
    <StyledWrapper>
      <div className="card">
        {/* Show image if provided, else fallback gradient */}
        {image ? (
          <img src={image} alt={title} className="card-img" />
        ) : (
          <div className="card-img" />
        )}
        <div className="card-info">
          <p className="text-title">{title}</p>
          <p className="text-body">{body}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

// Infinity slider for cards
export const CardSlider = ({ cards }) => {
  const sliderRef = useRef(null);

  // Duplicate cards for infinite effect
  const allCards = [...cards, ...cards, ...cards];

  return (
    <SliderWrapper>
      <div className="slider" ref={sliderRef}>
        {allCards.map((cardProps, idx) => (
          <div className="slide" key={idx}>
            <Card {...cardProps} />
          </div>
        ))}
      </div>
    </SliderWrapper>
  );
};

const StyledWrapper = styled.div`
  /*Magic card*/
  .card {
   width: 190px;
   height: 220px;
   background: #f5f5f5;
   overflow: visible;
   box-shadow: 0 5px 20px 2px rgba(0,0,0,0.1);
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
  }

  .card-info {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0 1rem;
   margin-top: 0; /* Remove margin so content is at the top */
  }

  .card-img {
   --size: 100px;
   width: var(--size);
   height: var(--size);
   border-radius: 50%;
   position: static;
   display: block;
   margin: 0 auto 1rem auto;
   background: #42caff;
   background: linear-gradient(to bottom,rgb(7, 185, 255) 0%,rgb(6, 126, 32) 100%);
   transition: all .3s ease-in-out;
   z-index: 2;
   object-fit: cover;
   border: 4px solid #fff;
   box-shadow: 0 20px 8px rgba(21, 19, 19, 0.08);
  }

  /*Text*/
  .text-title {
   text-transform: uppercase;
   font-size: 0.75em;
   color:rgb(15, 178, 72);
   letter-spacing: 0.05rem;
  }

  .text-body {
   font-size: .8em;
   text-align: center;
   color: #6f6d78;
   font-weight: 400;
   font-style: italic;
  }

  /*Hover*/
  .card:hover .card-img {
   --size: 110px;
   width: var(--size);
   height: var(--size);
  }`;

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 250px; /* Adjust height as needed */
  .slider {
    display: flex;
    gap: 1.5rem;
    animation: scroll 20s linear infinite;
    width: max-content;
  }
  .slide {
    flex: 0 0 auto;
  }
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.33%); }
  }
`;

export default Card;
