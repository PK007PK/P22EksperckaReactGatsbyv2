import styled from 'styled-components';
import icon from '../../assets/icons/arrow.svg';

export const StyledI = styled.i`
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 4;
  width: ${({ small }) => (small ? '25px' : '28px')};
  height: ${({ small }) => (small ? '25px' : '28px')};
  transform: rotate(180deg);
`;
