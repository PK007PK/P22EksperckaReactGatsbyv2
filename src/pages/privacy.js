import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import HeadingSubpage from '../sections/HeadingSubpage/HeadingSubpage';
import PlainTextSection from '../sections/PlainTextSection/PlainTextSection';

const KontaktPage = ({ data }) => {
  const title = `${data.datoCmsSiteSetup.siteTitle} - polityki`;
  return (
    <>
      <Helmet title={title} />
      <article>
        <HeadingSubpage
          fluid={data.datoCmsSiteSetup.policyPageHeroImage.fluid}
          title="Polityka prywatności"
          slug="#polityka"
          description={data.datoCmsSiteSetup.policyPageDescription}
          alt={data.datoCmsSiteSetup.policyPageHeroImage.alt}
        />
        <PlainTextSection data={data.datoCmsSiteSetup.policyArticleContent} />
      </article>
    </>
  );
};

export const query = graphql`
  {
    datoCmsSiteSetup {
      siteTitle
      policyPageDescription
      policyArticleContent {
        ... on DatoCmsParagraph {
          paragraphContentNode {
            childMdx {
              body
            }
          }
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          id
        }
      }
      policyPageHeroImage {
        fluid(maxWidth: 650, maxHeight: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
        alt
      }
    }
  }
`;

export default KontaktPage;
