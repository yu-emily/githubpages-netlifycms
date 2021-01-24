import React from 'react';
import styled from 'styled-components';
import PrevPost from './prev-post';
import NextPost from './next-post';
import SocialMediaShare from './socialmedia-share';

const PostContainer = styled.div`
  width: 75%;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  margin: auto;
  max-width: 1200px;
`;

export default ({children, prevPost, nextPost, url, title, featureImage, altText}) => {
  return (
    <PostContainer>
        <ContentContainer>
            <h2>{title}</h2>
            <img src={featureImage} alt={altText}/>
            {children}
        </ContentContainer>
        <SocialMediaShare url={url}></SocialMediaShare>
        {prevPost === null ? '' : <PrevPost post={prevPost}></PrevPost>}
        {nextPost === null ? '' : <NextPost post={nextPost}></NextPost>}    
    </PostContainer>
  );
};

