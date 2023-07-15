/* eslint-disable react-hooks/exhaustive-deps */
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from 'react';
import { BreedItem } from '../../molecues/BreedItem/BreedItem';
import { Wrapper } from './BreedList.style';
import { DataProvider } from '../../../hooks/useData';

export const BreedList = () => {
  const { fetchData, loadedBreeds, handleLoadData, breeds } = DataProvider();

  useEffect(() => {
    fetchData();
  }, []);

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
