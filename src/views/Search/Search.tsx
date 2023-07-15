/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ViewWrapper } from '../../components/molecues/ViewWrapper/ViewWrapper';
import { DataProvider } from '../../hooks/useData';
import { SearchForm } from '../../components/organisms/SearchForm/SearchForm';
import { About } from '../../components/organisms/About/About';

export const Search = () => {
  const { fetchImage, imageSrc, notFound } = DataProvider();
  const [searchBreed, setSearchBreed] = useState<string>('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchImage(id);
    }
  }, []);

  useEffect(() => {
    if (searchBreed) fetchImage(searchBreed);
  }, [searchBreed]);

  const handleSearch = (item: string) => {
    setSearchBreed(item.toLowerCase());
    navigate(`/search/${item}`);
  };

  return (
    <ViewWrapper>
      <SearchForm item={id || ''} handleSearch={handleSearch} />
      {searchBreed || id ? (
        <About image={imageSrc} notFound={notFound} />
      ) : null}
    </ViewWrapper>
  );
};
