import InfiniteScroll from 'react-infinite-scroll-component';
import { BreedItem } from '../../molecues/BreedItem/BreedItem';
import { Wrapper } from './BreedList.style';
import { DataProvider } from '../../../hooks/useData';

export const BreedList = () => {
  const { loadedBreeds, handleLoadData, breeds } = DataProvider();

  return (
    <Wrapper>
      <InfiniteScroll
        dataLength={loadedBreeds.length}
        next={handleLoadData}
        hasMore={breeds.length !== loadedBreeds.length}
        loader={<p>Loading...</p>}
      >
        {loadedBreeds.map((breed, index) => (
          <BreedItem item={breed} key={index} />
        ))}
      </InfiniteScroll>
    </Wrapper>
  );
};
