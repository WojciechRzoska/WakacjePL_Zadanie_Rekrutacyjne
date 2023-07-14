import { useEffect } from 'react';
import {
  BreedNameContainer,
  ImageContainer,
  StyledImage,
  Wrapper,
} from './BreedItem.style';
import { DataProvider } from '../../../hooks/useData';

interface BreedItemProps {
  item: string;
}
export const BreedItem = ({ item }: BreedItemProps) => {
  const { fetchImage, imageSrc } = DataProvider();

  useEffect(() => {
    fetchImage(item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return (
    <Wrapper to="/search" state={{ breedName: item }}>
      <ImageContainer>
        <StyledImage src={imageSrc} alt={`${item} breed`} />
      </ImageContainer>
      <BreedNameContainer>{item}</BreedNameContainer>
    </Wrapper>
  );
};
