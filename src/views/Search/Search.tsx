/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ViewWrapper } from '../../components/molecues/ViewWrapper/ViewWrapper';
import { DataProvider } from '../../hooks/useData';
import { SearchForm } from '../../components/organisms/SearchForm/SearchForm';
import { About } from '../../components/organisms/About/About';

export const Search = () => {
  const { fetchImage, imageSrc, notFound } = DataProvider();
  const [searchBreed, setSearchBreed] = useState<string>('');
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      fetchImage(state.breedName);
    }
  }, []);

  useEffect(() => {
    if (searchBreed !== '') fetchImage(searchBreed);
  }, [searchBreed]);

  const handleSearch = (item: string) => {
    setSearchBreed(item.toLowerCase());
  };

  return (
    <ViewWrapper>
      <SearchForm
        item={state ? state.breedName : ''}
        handleSearch={handleSearch}
      />
      {searchBreed || state ? (
        <About image={imageSrc} notFound={notFound} />
      ) : null}
    </ViewWrapper>
  );
};
