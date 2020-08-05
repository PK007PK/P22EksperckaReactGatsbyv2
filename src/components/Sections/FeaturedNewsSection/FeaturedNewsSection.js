import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import slugify from "slugify"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"

import NewsTile from "../../NewsTile/NewsTile"
import HeadingWrapper from "../../HeadingWrapper/HeadingWrapper"
import TilesWrapper from "../../../utilities/TilesWrapper/TilesWrapper"

import {
  StyledSectionLayout,
  StyledWrapper,
  StyledLink,
} from "./FeaturedNewsSection.style"

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
                excerpt(pruneLength: 120)
              }
            }
          }
        }
      }
    }
  }
`

const FeaturedNewsSection = () => {
  const data = useStaticQuery(query)
  const [swiper, updateSwiper] = useState(null)
  const params = {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: "auto",
      },
      576: {
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
      1450: {
        slidesPerView: 3,
      },
    },
  }

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext()
    }
  }
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev()
    }
  }
  return (
    <StyledSectionLayout>
      <HeadingWrapper
        title={"Wyróżnione wpisy"}
        inputColor={({ theme }) => theme.color.deepBlue}
        inputBackgroundColor={({ theme }) => theme.color.blue}
      ></HeadingWrapper>
      <Swiper {...params} getSwiper={updateSwiper}>
        {data.allDatoCmsNews.nodes.map(item => {
          return (
            <SwiperSlide>
              <NewsTile
                date={item.date}
                title={item.title}
                text={
                  item.articleContent[0].paragraphContentNode.childMdx.excerpt
                }
                slug={slugify(item.title, { lower: true })}
                key={item.id}
                background={item.featuredImage.fluid}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </StyledSectionLayout>
  )
}

export default FeaturedNewsSection