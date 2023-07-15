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
  const formatedName = item.charAt(0).toUpperCase() + item.slice(1);
  return (
    <Wrapper to={`/search/${formatedName}`}>
      <ImageContainer>
        <StyledImage src={imageSrc} alt={`${item} breed`} />
      </ImageContainer>
      <BreedNameContainer>{formatedName}</BreedNameContainer>
    </Wrapper>
  );
};
