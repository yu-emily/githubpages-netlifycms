import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../components/main-layout"

export default function SiteTemplate({data}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;  
  return (
    <MainLayout>
        <div
         dangerouslySetInnerHTML={{ __html: html }}
        >
            
        </div>
    </MainLayout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
    }
  }
`;