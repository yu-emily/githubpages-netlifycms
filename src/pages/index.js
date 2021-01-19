import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../components/main-layout"

export default function Home({data: {site}}) {
  return (
    <MainLayout site={site} pageTitle="Home">
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </MainLayout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;