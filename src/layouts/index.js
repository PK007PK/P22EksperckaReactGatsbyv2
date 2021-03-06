import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { theme } from 'src/assets/theme/theme';

import 'normalize.css';
import GlobalStyle from 'src/styles/GlobalStyle';
import Links from 'src/styles/Links';
import Typography from 'src/styles/Typography';
import TxtHoverFocusTab from 'src/styles/TxtHoverFocusTab';

import BootstrapContainer from '../utils/BootstrapContainer/BootstrapContainer';
import TopMenuBar from '../components/MenuTopBar1/MenuTopBar1';
import Footer from '../sections/Footer1/Footer1';

const StyledTopMenuBar = styled(TopMenuBar)`
  margin-top: 30px;
`;

const BodyWrapper = styled.div`
  min-height: calc(100vh - 162px);
`;

const MainLayout = ({ children }) => {
  const data = useStaticQuery(query);
  const content = data.datoCmsSiteSetup.siteDescription;
  const keywords = data.datoCmsSiteSetup.siteKeywords;
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet
          meta={[
            { name: 'description', content },
            { name: 'keywords', content: keywords },
          ]}
        >
          <link rel="canonical" href={url} />
          <html lang="pl" />
        </Helmet>
        <GlobalStyle />
        <Links />
        <Typography />
        <TxtHoverFocusTab />
        <BootstrapContainer>
          <StyledTopMenuBar />
        </BootstrapContainer>
        <BodyWrapper>
          <main>{children}</main>
        </BodyWrapper>
        <Footer />
      </>
    </ThemeProvider>
  );
};

const query = graphql`
  {
    sitePage {
      path
    }
    datoCmsSiteSetup {
      siteUrl
      siteDescription
      siteKeywords
    }
  }
`;

export default MainLayout;
