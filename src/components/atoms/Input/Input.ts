import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { FormFieldProps } from '../../molecues/FormField/FormField';

const Input = styled.input<FormFieldProps>`
  border: none;
  height: 3.5rem;
  font-size: 1.5rem;
  padding: 0px 20px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-color: ${({ isError, theme }) =>
    isError ? theme.colors.red : theme.colors.black};
  box-shadow: 0px 2px 10px -3px rgba(66, 68, 90);

  &::placeholder {
    color: ${({ isError, theme }) =>
      isError ? theme.colors.red : theme.colors.grey};
  }
  &:focus {
    outline: none;
    border-color: ${({ isError, theme }) =>
      isError ? theme.colors.red : theme.colors.darkGreen};
  }
  @media (min-width: 60em) {
    font-size: 1.2rem;
  }
`;
export default Input;
