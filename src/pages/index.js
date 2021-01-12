import React from 'react';
import { Helmet } from 'react-helmet';

import HeadingHeroRight from '../sections/HeadingHeroRight/HeadingHeroRight';
import FeaturedNewsSection from '../sections/FeaturedNewsSection/FeaturedNewsSection';
import RecentlyAdded from '../sections/RecentlyAdded/RecentlyAdded';

const IndexPage = ({ data }) => {
  const title = `${data.datoCmsSiteSetup.siteTitle} - strona główna`;
  return (
    <>
      <Helmet title={title} />
      <article>
        <HeadingHeroRight />
        <FeaturedNewsSection />
        <RecentlyAdded />
      </article>
    </>
  );
};

export const query = graphql`
  {
    datoCmsSiteSetup {
      siteTitle
    }
  }
`;

export default IndexPage;
