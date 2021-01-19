/* 
Originally created by jonathanrdelgado from The-Programming-Foundation/tutorials
*/
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding-top: 2vw;
  padding-bottom: 2vw;
  padding-left: 4vw;
  padding-right: 4vw;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.div`
  font-weight: 500;
  font-size: 2rem;
`;

const HeaderMenuItem = styled.li`
  display: inline-block;
  margin-left: 25px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const HeaderMenuItemAccent = styled.li`
  display: inline-block;
  margin-left: 25px;
  color: white;
  background: black;
  padding: 10px 15px;

  a {
    text-decoration: none;
    color: white;
  }
`;

export default () => {
  return (
    <HeaderContainer>
      <HeaderTitle>The Programming Foundation</HeaderTitle>
      <ul>
        <HeaderMenuItem><a href="https://www.theprogrammingfoundation.org/donate">Donate</a></HeaderMenuItem>
        <HeaderMenuItem><a href="https://www.theprogrammingfoundation.org/blog">Blog</a></HeaderMenuItem>
        <HeaderMenuItem><a href="https://www.theprogrammingfoundation.org/charter">Charter</a></HeaderMenuItem>
        <HeaderMenuItemAccent><Link to="/learn">Learn</Link></HeaderMenuItemAccent>
      </ul>
    </HeaderContainer>
  );
};