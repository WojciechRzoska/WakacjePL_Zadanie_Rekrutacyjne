import styled from 'styled-components';

export const Label = styled.label`
  font-weight: bold;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGreen};
  position: absolute;
  top: -10px;
  left: 10px;

  padding: 2px;
`;
