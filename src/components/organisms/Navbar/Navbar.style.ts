import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  padding: 10px 0;
  width: 100%;

  @media (min-width: 57em) {
    position: static;
    margin-bottom: 35px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
  @media (min-width: 57em) {
    justify-content: space-between;
  }
`;
export const LogoWrapper = styled.div`
  display: none;
  @media (min-width: 57em) {
    display: block;
  }
`;
export const Logo = styled.h1`
  font-size: 2rem;
`;

export const Links = styled.div`
  display: flex;
  gap: 25vw;
  justify-content: center;

  @media (min-width: 57em) {
    gap: 5vw;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.black};
  &.active {
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const StyledNavLinkLogo = styled(NavLink)`
  text-decoration: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black};
`;
