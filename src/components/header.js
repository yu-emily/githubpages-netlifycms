/* 
Originally created by jonathanrdelgado from The-Programming-Foundation/tutorials
*/
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderContainer = styled.div`
  width: 100%;
  height: 30vh;

  background-image: ${(props) => props.bgImage == "" ? 'none' : `url(${props.bgImage})`};
  background-size: ${(props) => props.bgImage == "" ? 0 : 'cover'};
  background-position: ${(props) => props.bgImage == "/static/6370c86f29d02ee1af9997698b4c26f5/9ca4b675-3da6-44b0-98c8-c9d481c31c4e.jpeg" ? '49.4424% 68.7344%' : 0};  
  background-position: ${(props) => props.bgImage == "/static/ef94127299e01ca4d0f8d23c0ea8b4e2/blog-jumbotron.jpg" ? '53.8462% 66.3003%' : 0};  
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2vw;
  padding-bottom: 2vw;
  padding-left: 4vw;
  padding-right: 4vw;
`;

const HeaderTitle = styled.div`
  font-weight: 500;
  font-size: 2rem;
  a {
    text-decoration: none;
    color: ${(props) => props.color};
  }
`;

const HeaderMenuItem = styled.li`
  display: inline-block;
  margin-left: 25px;

  a {
    text-decoration: none;
    color: ${(props) => props.color};
  }
`;

const HeaderMenuItemAccent = styled.li`
  display: inline-block;
  margin-left: 25px;
  color: white;
  background: ${(props) => props.color};
  padding: 10px 15px;

  a {
    text-decoration: none;
    color: ${(props) => props.color == "white" ? "black" : "white"};
  }
`;

export default ({bgImage, title}) => {
  let color;
  if (bgImage == ""){
    color = "black";
  }else{
    color = "white";
  }
  return (
    <HeaderContainer bgImage={bgImage}>
      <NavContainer>
        <HeaderTitle color={color}><Link to="/">The Programming Foundation</Link></HeaderTitle>
          <ul>
            <HeaderMenuItem color={color}><Link to="/donate">Donate</Link></HeaderMenuItem>
            <HeaderMenuItem color={color}><Link to="/blog">Blog</Link></HeaderMenuItem>
            <HeaderMenuItem color={color}><Link to="/charter">Charter</Link></HeaderMenuItem>
            <HeaderMenuItemAccent color={color}><Link to="/learn">Learn</Link></HeaderMenuItemAccent>
          </ul>       
      </NavContainer>     
    </HeaderContainer>
  );
};