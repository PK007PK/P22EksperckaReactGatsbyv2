import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import IconEmail from '../../components/IconEmail/IconEmail';

import {
  StyledSection,
  StyledTxtWrapper,
  StyledImage,
  StyledButton,
} from './HeadingHeroRight.styles.js';

const HeadingHeroRight = () => {
  const data = useStaticQuery(query);
  return (
    <header>
      <StyledSection>
        <StyledTxtWrapper>
          <div />
          <div>
            <p className="subtitle">{data.datoCmsSiteSetup.mainPageMotto}</p>
            <h1>{data.datoCmsSiteSetup.mainPageAdditionalText}</h1>
            <p className="subtitle">
              Przystępnie o emeryturach,
              <br />
              rentach i zasiłkach
            </p>
            <div className="buttonWrapper">
              <a
                href={`mailto:${data.datoCmsSiteSetup.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <IconEmail />
              </a>
              <StyledButton small href={`tel:${data.datoCmsSiteSetup.phone}`}>
                {' '}
                +48 733 730 870
              </StyledButton>
            </div>
          </div>
          <div />
        </StyledTxtWrapper>
        <StyledImage
          fluid={data.datoCmsSiteSetup.mainPageHeroImage.fluid}
          alt={data.datoCmsSiteSetup.mainPageHeroImage.alt}
        />
      </StyledSection>
    </header>
  );
};

const query = graphql`
  {
    datoCmsSiteSetup {
      mainPageMotto
      phone
      email
      mainPageAdditionalText
      mainPageDescription
      youtubeChanelLink
      facebookLink
      mainPageHeroImage {
        fluid(maxWidth: 700) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
        alt
      }
    }
  }
`;

export default HeadingHeroRight;
