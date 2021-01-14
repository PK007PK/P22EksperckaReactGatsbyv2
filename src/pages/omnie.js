import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import HeadingSubpage from '../sections/HeadingSubpage/HeadingSubpage';
import PlainTextSection from '../sections/PlainTextSection/PlainTextSection';

const OMniePage = ({ data }) => {
  const title = `${data.datoCmsSiteSetup.siteTitle} - o mnie`;
  return (
    <>
      <Helmet title={title} />
      <article>
        <HeadingSubpage
          fluid={data.datoCmsSiteSetup.oMniePageHeroImage.fluid}
          title="O mnie"
          slug="#o-mnie"
          description={data.datoCmsSiteSetup.oMniePageDescription}
          alt={data.datoCmsSiteSetup.oMniePageHeroImage.alt}
        />
        <PlainTextSection data={data.datoCmsSiteSetup.oMnieArticleContent} />
      </article>
    </>
  );
};

export const query = graphql`
  {
    directory {
      relativePath
      root
    }
    datoCmsSiteSetup {
      siteTitle
      oMniePageDescription
      oMnieArticleContent {
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
      oMniePageHeroImage {
        fluid(maxWidth: 550, maxHeight: 800) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
        alt
      }
    }
  }
`;

export default OMniePage;
