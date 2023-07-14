import { FaDog, FaSearch } from 'react-icons/fa';
import {
  Links,
  LinksContainer,
  Logo,
  LogoWrapper,
  StyledNavLink,
  Wrapper,
} from './Navbar.style';

export const Navbar = () => {
  return (
    <Wrapper>
      <LinksContainer>
        <LogoWrapper>
          <Logo>Dogpedia</Logo>
        </LogoWrapper>
        <Links>
          <StyledNavLink to="/home">
            <FaDog />
          </StyledNavLink>
          <StyledNavLink to="/search">
            <FaSearch />
          </StyledNavLink>
        </Links>
      </LinksContainer>
    </Wrapper>
  );
};
