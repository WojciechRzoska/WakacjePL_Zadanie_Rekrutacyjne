import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  height: 3.5rem;
  font-size: 1.5rem;
  padding: 0px 20px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  box-shadow: 0px 2px 10px -3px rgba(66, 68, 90);

  @media (min-width: 60em) {
    font-size: 1.2rem;
  }
  @media (min-width: 83em) {
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.darkGreen};
  }
`;
