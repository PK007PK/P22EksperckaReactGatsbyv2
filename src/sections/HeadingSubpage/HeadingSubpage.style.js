import styled from 'styled-components';
import Image from 'gatsby-image';

export const StyledSection = styled.section`
  height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;

  ${({ theme }) => theme.media.xsAbove} {
    height: 40vh;
  }

  ${({ theme }) => theme.media.smAbove} {
    height: 40vh;
  }

  ${({ theme }) => theme.media.mdAbove} {
    margin-top: 50px;
    height: 400px;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: flex-end;
    @media (orientation: landscape) {
      /* max-height: calc(80vh - 98px + 50px); */
    }
  }
`;

export const StyledTxtWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  ${({ theme }) => theme.media.mdAbove} {
    width: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.lg};
    margin: 20px 0;
  }

  .slug {
    color: ${({ theme }) => theme.color.pink};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-top: 100px;

    ${({ theme }) => theme.media.mdAbove} {
      margin-top: 0;
    }
  }

  .description {
    display: block;
    max-width: 95%;
    font-weight: 500;
  }
`;

export const StyledImageWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media.mdAbove} {
    display: block;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

export const StyledImage = styled(Image)`
  display: none;

  ${({ theme }) => theme.media.mdAbove} {
    display: block;
    width: 400px;
    height: 280px;

    object-fit: contain;
    border: 1px solid gray;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-100%, -50%);
  }

  ${({ theme }) => theme.media.lgAbove} {
    width: 500px;
    height: 350px;
  }
`;
export const StyledDiv = styled.div`
  display: none;

  ${({ theme }) => theme.media.mdAbove} {
    display: block;
    position: absolute;
    top: 40%;
    left: 90%;
    transform: translate(-100%, -50%);
    width: 400px;
    height: 280px;
    /* border: 16px solid rgba(15, 53, 83, 0.4); */
  }

  ${({ theme }) => theme.media.lgAbove} {
    width: 500px;
    height: 350px;
    /* border: 16px solid rgba(15, 53, 83, 0.4); */
  }
`;
