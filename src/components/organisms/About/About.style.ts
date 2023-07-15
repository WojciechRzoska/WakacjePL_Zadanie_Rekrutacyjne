import styled from 'styled-components';
import { StyledImage } from '../../molecues/BreedItem/BreedItem.style';

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
  width: 80%;

  @media (min-width: 57em) {
    width: 50%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 250px;
  width: 250px;
`;

export const StyledRoundedImage = styled(StyledImage)`
  border-radius: 100%;
`;
export const DetailsContainer = styled.div`
  text-align: start;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
