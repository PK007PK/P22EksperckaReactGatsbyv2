import styled from "styled-components"
import Image from "gatsby-image"

import Button from "../../components/Button/Button"

const sectionHeight = {
  base: `100vh`,
  xs: `800px`,
  sm: `800px`,
  smLandscape: `calc(100vh - 98px + 50px)`,
  md: `700px`,
  mdLandscape: `calc(100vh - 98px + 50px)`,
  lg: `calc(100vh - 98px + 50px)`,
  xxl: `calc(100vh - 98px + 50px)`,
}

const heroImgSizes = {
  md: {
    height: `700px`,
    width: `466px`,
  },
  mdLandscape: `(100vh - 98px + 50px)`,
  lg: {
    height: `calc(100vh - 98px + 80px)`,
    width: `calc((100vh - 98px + 80px) * 0.666)`,
  },
  xxl: `(100vh - 98px + 50px)`,
}

export const StyledSection = styled.section`
  height: ${sectionHeight.base};
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 100px;

  ${({ theme }) => theme.media.xsAbove} {
    height: ${sectionHeight.xs};
  }

  ${({ theme }) => theme.media.smAbove} {
    height: ${sectionHeight.sm};
    background-image: none;
    display: flex;
    position: relative;
    padding-bottom: 0px;

    @media (orientation: landscape) {
      height: ${sectionHeight.smLandscape};
    }
  }

  ${({ theme }) => theme.media.mdAbove} {
    height: ${sectionHeight.md};

    @media (orientation: landscape) {
      height: ${sectionHeight.mdLandscape};
    }
  }

  ${({ theme }) => theme.media.lgAbove} {
    height: ${sectionHeight.lg};
  }

  ${({ theme }) => theme.media.xlAbove} {
    height: ${sectionHeight.xl};
  }
`

export const StyledTxtWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;

  ${({ theme }) => theme.media.smAbove} {
    width: 100%;
    padding-right: 40px;
  }

  ${({ theme }) => theme.media.mdAbove} {
    width: 60%;
  }

  ${({ theme }) => theme.media.lgAbove} {
    padding-right: 60px;
    width: 65%;
    padding-bottom: 100px;
  }

  ${({ theme }) => theme.media.xlAbove} {
    padding-right: 360px;
    width: 65%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .subtitle {
    font-weight: 200;
    font-size: 30px;
    line-height: 1.5;
    text-align: right;
  }

  h1 {
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: right;
  }

  .buttonWrapper {
    display: flex;
    margin-top: 40px;
    flex-direction: row;
    flex-wrap: nowrap;

    button {
      margin-left: 10px;
    }
  }
`
export const StyledButton = styled(Button)`
  margin-left: 10px;
`

export const StyledImage = styled(Image)`
  display: none;

  ${({ theme }) => theme.media.mdAbove} {
    display: flex;
    z-index: -10;
    flex-shrink: 0;
    height: ${heroImgSizes.md.height};
    width: ${heroImgSizes.md.width};

    @media (orientation: landscape) {
      margin-top: -30px;
      margin-right: 50px;
    }
  }

  ${({ theme }) => theme.media.lgAbove} {
    height: ${heroImgSizes.lg.height};
    width: ${heroImgSizes.lg.width};
    margin-right: 80px;
  }

  ${({ theme }) => theme.media.lgAbove} {
    margin-right: 8vw;
  }
`
