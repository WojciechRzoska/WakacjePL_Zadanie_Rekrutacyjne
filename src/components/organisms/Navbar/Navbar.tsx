import { FaDog, FaSearch } from 'react-icons/fa';
import {
  Links,
  LinksContainer,
  Logo,
  LogoWrapper,
  StyledNavLink,
  StyledNavLinkLogo,
  Wrapper,
} from './Navbar.style';

export const Navbar = () => {
  return (
    <Wrapper>
      <LinksContainer>
        <LogoWrapper>
          <StyledNavLinkLogo to="/home">
            <Logo>Dogpedia</Logo>
          </StyledNavLinkLogo>
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
