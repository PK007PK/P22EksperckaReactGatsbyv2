import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import slugify from 'slugify';
import CardVerticalBlogEntry from '../components/CardVerticalBlogEntry/CardVerticalBlogEntry';
import Button from '../components/Button/Button';
import HeadingSubpage from '../sections/HeadingSubpage/HeadingSubpage';
import SectionLayout from '../utils/SectionLayout/SectionLayout';
import { BootsRow, BootsColumn } from '../utils/BootsElements/BootsElements';

export default function paginatedBlogPage({ data, pageContext }) {
  const title = `${data.datoCmsSiteSetup.siteTitle} - blog`;
  const nextArticlesCollection =
    pageContext.currentPage === pageContext.pages
      ? null
      : `/blog/${pageContext.currentPage + 1}`;
  const previousArticlesCollection =
    pageContext.currentPage !== 1
      ? `/blog/${pageContext.currentPage - 1}`
      : null;

  return (
    <>
      <Helmet title={title} />
      <article>
        <HeadingSubpage
          fluid={data.datoCmsSiteSetup.blogPageHeroImage.fluid}
          title="Blog"
          slug="#blog"
          description={data.datoCmsSiteSetup.blogPageDescription}
          alt={data.datoCmsSiteSetup.blogPageHeroImage.alt}
        />
        <SectionLayout padding="50px 0 50px 0px">
          <StyledWrapper>
            {data.allDatoCmsNews.nodes.map(item => (
              <StyledCardVerticalBlogEntry
                date={item.date}
                title={item.title}
                text={item.leadText}
                slug={slugify(item.title, { lower: true })}
                key={item.id}
                background={item.featuredImage && item.featuredImage.fluid}
                youtube={item.youtube}
              />
            ))}
          </StyledWrapper>
          <nav>
            <BootsRow>
              <BootsColumn md="4" lg="3">
                <Button
                  to={previousArticlesCollection}
                  className={!previousArticlesCollection && 'diseabled'}
                  diseabled={!previousArticlesCollection && 'diseabled'}
                >
                  Poprzednia strona
                </Button>
              </BootsColumn>
              <BootsColumn md="4" lg="6" center yPadding="15px">
                {`Strona ${pageContext.currentPage} z ${pageContext.pages}`}
              </BootsColumn>
              <BootsColumn md="4" lg="3">
                <Button
                  to={nextArticlesCollection}
                  className={!nextArticlesCollection && 'diseabled'}
                  diseabled={!nextArticlesCollection && 'diseabled'}
                >
                  Następna strona
                </Button>
              </BootsColumn>
            </BootsRow>
          </nav>
        </SectionLayout>
      </article>
    </>
  );
}

export const query = graphql`
  query data($skip: Int! = 0) {
    datoCmsSiteSetup {
      siteTitle
      blogPageDescription
      blogPageHeroImage {
        fluid(maxWidth: 650, maxHeight: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
        alt
      }
    }
    allDatoCmsNews(
      sort: { fields: [date], order: DESC }
      limit: 4
      skip: $skip
    ) {
      nodes {
        author
        date
        title
        id
        youtube
        leadText
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
        articleContent {
          ... on DatoCmsParagraph {
            paragraphContentNode {
              childMdx {
                body
              }
            }
          }
        }
      }
    }
  }
`;

export const StyledCardVerticalBlogEntry = styled(CardVerticalBlogEntry)`
  margin: 15px 0;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
