/* eslint-disable react-hooks/exhaustive-deps */
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import FormField from '../../molecues/FormField/FormField';
import { ErrorMessage, FormContainer, SubmitButton } from './SearchForm.style';

export interface Inputs {
  searchBreed: string;
}

interface SearchFormProps {
  item: string;
  handleSearch: (item: string) => void;
}
export const SearchForm = ({ item, handleSearch }: SearchFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    setValue('searchBreed', item);
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault();
    handleSearch(data.searchBreed);
  };
  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormField
          {...register('searchBreed', { required: true })}
          name="searchBreed"
          id="searchInput"
          type="text"
          placeholder="e.g. Bulldog"
          label="Enter the breed you are looking for"
          isError={errors.searchBreed}
        />

        <SubmitButton type="submit">Search</SubmitButton>
      </FormContainer>
      {errors.searchBreed && <ErrorMessage>Breed is required</ErrorMessage>}
    </>
  );
};
