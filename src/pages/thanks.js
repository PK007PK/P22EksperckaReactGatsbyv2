import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import HeadingSubpage from '../sections/HeadingSubpage/HeadingSubpage';
import ThanksSection from '../sections/ThanksSection/ThanksSection';

const ThanksPage = ({ data }) => {
  const title = `${data.datoCmsSiteSetup.siteTitle} - kontakt`;
  return (
    <>
      <Helmet title={title} />
      <article>
        <HeadingSubpage
          fluid={data.datoCmsSiteSetup.kontaktPageHeroImage.fluid}
          title="Kontakt"
          slug="#kontakt"
          description={data.datoCmsSiteSetup.kontaktPageDescription}
          alt={data.datoCmsSiteSetup.kontaktPageHeroImage.alt}
        />
        <ThanksSection />
      </article>
    </>
  );
};

export const query = graphql`
  {
    datoCmsSiteSetup {
      siteTitle
      kontaktPageDescription
      kontaktPageHeroImage {
        fluid(maxWidth: 650, maxHeight: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
        alt
      }
    }
  }
`;

export default ThanksPage;
