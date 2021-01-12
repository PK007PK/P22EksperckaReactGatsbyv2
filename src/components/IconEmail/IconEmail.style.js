import styled from 'styled-components';
import icon from '../../assets/icons/email.svg';

export const StyledI = styled.i`
  width: 45px;
  display: block;
  height: 45px;
  background-color: #313548;
  background-image: url(${icon});
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
  transition: ${({ theme }) => theme.transition.custom};

  :hover {
    outline: none !important;
    border: none !important;
    box-shadow: 0px 5px 0px ${({ theme }) => theme.color.active};
  }

  :focus {
    outline: none !important;
    border: none !important;
    box-shadow: 0px 5px 0px ${({ theme }) => theme.color.active};
  }
`;
