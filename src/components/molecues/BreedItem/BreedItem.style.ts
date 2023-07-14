import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  width: 30%;
  min-width: 300px;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  display: flex;
  align-items: center;
  border-radius: 25px;
  height: 100px;
  gap: 20px;
  font-size: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    transition: background-color 300ms ease;
  }
  @media (min-width: 57em) {
    width: 100%;
    height: 130px;
  }
`;

export const ImageContainer = styled.div`
  width: 30%;
  height: 100%;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px 0px 0px 25px;
`;

export const BreedNameContainer = styled.div`
  width: 70%;
`;
