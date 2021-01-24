import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../components/main-layout"
import PostLayout from "../components/post-layout"
import styled from "styled-components"

const BlogContainer = styled.div`
  background-color: #eeedeb;
`;

export default function SiteTemplate({data, pageContext}) {
  const { markdownRemark } = data;
  const { html, frontmatter, fields } = markdownRemark;
  const { prev, next } = pageContext;
  
  let image;      
  if(frontmatter.image == null){
    image = ""
  }else{
    image = frontmatter.image.publicURL
  }
  
  return (
    <BlogContainer>
      <MainLayout bgImage={image}>
          <PostLayout prevPost={prev} nextPost={next} url={fields.slug} title={frontmatter.title} featureImage={frontmatter.feature_image.publicURL} altText={frontmatter.alt_text}>
            <div
            dangerouslySetInnerHTML={{ __html: html }}
            >
                
            </div>
          </PostLayout>
      </MainLayout>
    </BlogContainer>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        feature_image {
          publicURL
        }
        title
        alt_text
        image {
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
`;