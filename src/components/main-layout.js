/* 
Originally created by jonathanrdelgado from The-Programming-Foundation/tutorials
*/

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import "@fontsource/poppins"

import Header from './header';
import Footer from './footer';

const GlobalStyle = createGlobalStyle`
  body {
    line-height: 1.8;
    font-family: "Poppins";
  }

  h1, h2, h3, h4, h5 {
    font-weight: 500;
    margin: 2rem 0;
  }

  h1 {
    font-size: 4rem;
    line-height: 1.4em;
  }

  h2 {
    font-size: 3rem;
    line-height: 1.3em;
  }

  h3 {
    font-size: 2rem;
    line-height: 1.3em;
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

  const ContentContainer = styled.div`
  padding: 15px;
  margin: 50px 0;
  width: 100%;
  max-width: 1200px;
`;

export default ({children}) => {
  return (
    <LayoutContainer>
      <StaticQuery
        query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
       render={data => (
        <Helmet title={data.site.siteMetadata.title}>
        <html lang="en" />
      </Helmet>
       ) }
      />      
    <GlobalStyle />
    <Header></Header>
    <ContentContainer>{children}</ContentContainer>
    <Footer></Footer>
    </LayoutContainer>
  );
};

