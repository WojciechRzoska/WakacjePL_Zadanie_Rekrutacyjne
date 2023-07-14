import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const SubmitButton = styled.button`
  height: 3.5rem;
  width: 120px;
  margin-top: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    color: black;
    transition: background-color 300ms ease, color 300ms ease;
  }
`;
