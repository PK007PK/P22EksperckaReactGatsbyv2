import styled from 'styled-components';
import { Link } from 'gatsby';

import Logo from '../Logo/Logo';
import BurgerMenu from '../MenuBurger1/MenuBurger1';

export const StyledLink = styled(Link)`
  position: relative;
`;

export const StyledNav = styled.nav`
  color: ${({ theme }) => theme.color.color3};
  display: flex;
  z-index: 100;
`;

export const StyledLogo = styled(Logo)`
  margin-right: 50px;

  ${({ theme }) => theme.media.lgAbove} {
    margin-right: 170px;
  }

  ${({ theme }) => theme.media.xlAbove} {
    margin-right: 200px;
  }
`;

export const StyledWrapper = styled.ul`
  align-items: center;
  height: 68px;
  display: none;

  ${({ theme }) => theme.media.smAbove} {
    display: flex;
  }

  li {
    margin-left: 35px;
  }
`;

export const StyledBurgerMenu = styled(BurgerMenu)`
  margin-right: 10px;
  margin-top: 10px;

  ${({ theme }) => theme.media.smAbove} {
    display: none;
  }
`;
