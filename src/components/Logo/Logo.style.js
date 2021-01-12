import styled from 'styled-components';

export const StyledLogo = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${({ secondary }) =>
    secondary &&
    `
    color: white;
  `}

  .top {
    font-family: 'Ubuntu', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-weight: bold;
    font-size: 38px;
    line-height: 38px;
    letter-spacing: -3px;
  }

  .bottom {
    font-weight: 700;
    font-size: 15px;
    margin-top: -4px;
    letter-spacing: -0.4px;

    span {
      color: red;
      font-weight: 500;
    }
  }
`;
