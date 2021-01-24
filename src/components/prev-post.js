import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'gatsby';

const PrevPostContainer = styled.div`
    float: right;
    font-size: 1.4em;
    font-weight: bold;

    a{
        color: black;
        text-decoration: none;
    }
`;

export default ({post}) => {
    return(
        <PrevPostContainer>
            <Link to={post.fields.slug}>
                {post.frontmatter.title}<IoIosArrowForward />
            </Link>
        </PrevPostContainer>    
    )
}