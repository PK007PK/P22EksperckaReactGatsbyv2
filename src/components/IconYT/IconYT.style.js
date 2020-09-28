import styled from "styled-components"
import icon from "../../assets/icons/yt.svg"

export const StyledI = styled.i`
  background-image: url(${icon});
  background-color: ${({ theme }) => theme.color.active};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 4;
  width: ${({ small }) => (small ? "25px" : "28px")};
  height: ${({ small }) => (small ? "25px" : "28px")};
`
