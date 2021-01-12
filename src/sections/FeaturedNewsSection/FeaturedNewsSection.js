import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import slugify from 'slugify';

import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import CardFeaturedNews from 'src/components/CardFeaturedNews/CardFeaturedNews';
import HeadingWrapper from '../../components/HeadingWrapper/HeadingWrapper';

import { StyledSectionLayout } from './FeaturedNewsSection.style';

const query = graphql`
  {
    allDatoCmsNews(
      sort: { fields: [date], order: DESC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        author
        date
        title
        id
        youtube
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

const StyledSwiper = styled(Swiper)`
  padding-bottom: 100px;
  z-index: 0;
`;

const FeaturedNewsSection = () => {
  const data = useStaticQuery(query);

  const params = {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 30,
    speed: 40,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1550: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <StyledSectionLayout padding="70px 0 0px 0px">
        <HeadingWrapper
          title="Wyróżnione wpisy"
          txtColor={({ theme }) => theme.color.white}
          backgroundColor={({ theme }) => theme.color.color3}
        />

        <StyledSwiper {...params}>
          {data.allDatoCmsNews.nodes.map(item => (
            <SwiperSlide key={item.id}>
              <CardFeaturedNews
                background={item.featuredImage && item.featuredImage.fluid}
                date={item.date}
                title={item.title}
                youtube={item.youtube}
                slug={slugify(item.title, { lower: true })}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </StyledSectionLayout>
    </>
  );
};

export default FeaturedNewsSection;
