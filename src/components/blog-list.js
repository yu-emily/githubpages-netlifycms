import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1400px;
    margin: 0 auto;
`;

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 15px;
`;

export default() => {
    let data = useStaticQuery(graphql`
    query{
        allMarkdownRemark(filter: {fields: {slug: {regex: "/blog/"}}}, sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            frontmatter {
              date
              author
              title
              excerpt
              feature_image {
                publicURL
              }
              alt_text
            }
            fields {
              slug
            }
          }
        }
      }
    }
    `);

    return(
      <div>
      <h1>Blog</h1>
      <ListContainer>
      {data.allMarkdownRemark.edges.map((post) => (
          <PostContainer>
              <img src={post.node.frontmatter.feature_image.publicURL} alt={post.node.frontmatter.alt_text} />
              <h4>{post.node.frontmatter.date} * {post.node.frontmatter.author}</h4>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.excerpt}</p>
              <Link to={post.node.fields.slug}>Read More</Link>
          </PostContainer>    
      ))}
      </ListContainer>
      </div>
    );
}