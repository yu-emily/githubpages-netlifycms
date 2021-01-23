/* 
Originally created by jonathanrdelgado from The-Programming-Foundation/tutorials
*/

import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  width: 75%;
  margin: 0 auto;
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

