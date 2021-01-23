import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../components/main-layout"

export default function SiteTemplate({data}) {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  
  let image;      
  if(frontmatter.image == null){
    image = ""
  }else{
    image = frontmatter.image.publicURL
  }
  return (
    <MainLayout bgImage={image}>
        <div
         dangerouslySetInnerHTML={{ __html: html }}
        >
            
        </div>
    </MainLayout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        image {
          publicURL
        }
      }
    }
  }
`;