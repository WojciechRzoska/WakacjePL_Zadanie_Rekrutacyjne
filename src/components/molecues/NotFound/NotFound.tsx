import React from 'react';
import { ImageContainer } from '../BreedItem/BreedItem.style';
import {
  DetailsContainer,
  StyledRoundedImage,
} from '../../organisms/About/About.style';

export const NotFound = () => {
  return (
    <>
      <ImageContainer>
        <StyledRoundedImage
          src="https://cdn1.iconfinder.com/data/icons/cute-corgi-dog-emoticon/595/CUTE_CORGI_DOG_EMOTICON-13-512.png"
          alt="Error_search"
        />
      </ImageContainer>
      <DetailsContainer>
        <p>Ops! We don't have this breed in our database. Try again!</p>
      </DetailsContainer>
    </>
  );
};
