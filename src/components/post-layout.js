import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  max-width: 1200px;
`;

const ContentContainer = styled.div`
  margin: auto;
`;


export default ({children, title, featureImage, altText}) => {
  return (
    <PostContainer>
        <h2>{title}</h2>
        <img src={featureImage} alt={altText}/>
        <ContentContainer>{children}</ContentContainer>
    </PostContainer>
  );
};

