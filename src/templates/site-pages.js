import React from "react"
import { graphql } from "gatsby"
import SiteLayout from "../components/site-layout"

export default function SiteTemplate({data}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;  
  return (
    <SiteLayout>
        <div
         dangerouslySetInnerHTML={{ __html: html }}
        >
            
        </div>
    </SiteLayout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;