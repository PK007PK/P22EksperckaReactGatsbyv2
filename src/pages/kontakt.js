import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import HeadingSubpage from '../sections/HeadingSubpage/HeadingSubpage';
import ContactSection from '../sections/ContactSection/ContactSection';

const KontaktPage = ({ data }) => {
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
        <ContactSection />
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

export default KontaktPage;
