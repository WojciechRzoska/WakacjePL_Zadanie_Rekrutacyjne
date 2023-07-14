import axios from 'axios';
import { useEffect, useState } from 'react';

// custom hook aby nie powielać kodu do pobierania danych
export const DataProvider = () => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [loadedBreeds, setLoadedBreeds] = useState<string[]>([]);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [notFound, setNotFound] = useState<boolean>(false);

  // funkcja asychnorniczna do pobrania danych aby pobieranie danych nie stopowało renderowania strony
  const fetchData = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/list/all');
      const result = Object.keys(response.data.message);
      setBreeds(result);
    } catch (error) {
      setNotFound(true);
    }
  };

  useEffect(() => {
    if (breeds.length === 0) fetchData();
  }, [breeds.length]);

  useEffect(() => {
    setLoadedBreeds(breeds.slice(0, 10));
  }, [breeds]);

  const handleLoadData = () => {
    const currentLength = loadedBreeds.length;
    const nextBatch = breeds.slice(currentLength, currentLength + 10);
    setLoadedBreeds((prevBreeds) => [...prevBreeds, ...nextBatch]);
  };

  const fetchImage = async (breedName: string) => {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breedName}/images/random`
      );
      const result = response.data.message;
      setImageSrc(result);
      setNotFound(false);
    } catch (error) {
      setNotFound(true);
    }
  };

  return {
    fetchData,
    handleLoadData,
    loadedBreeds,
    breeds,
    imageSrc,
    fetchImage,
    notFound,
  };
};
