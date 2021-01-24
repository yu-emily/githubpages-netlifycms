import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'gatsby';

const NextPostContainer = styled.div`
    float: left;
    font-size: 1.4em;
    font-weight: bold;

    a{
        color: black;
        text-decoration: none;
    }
`;

export default ({post}) => {
    return(
        <NextPostContainer>
            <Link to={post.fields.slug}>
                <IoIosArrowBack />{post.frontmatter.title}
            </Link>
        </NextPostContainer>    
    )
}