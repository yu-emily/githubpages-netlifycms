/* 
Originally created by jonathanrdelgado from The-Programming-Foundation/tutorials
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const FooterContainer = styled.div`
  display: flex;
  padding-top: 2vw;
  padding-bottom: 2vw;
  padding-left: 4vw;
  padding-right: 4vw;
  width: 100%;
  background: black;
  color: white;
  margin: -8px;
  flex-wrap: wrap;
  line-height: 1.5;
  justify-content: space-between;
`;

const ExcerptContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
  max-width: 600px;
`;

const ExcerptTagline = styled.div`
  font-weight: 500;
  font-size: 2rem;
`;

const ExcerptDonateButton = styled.button`
  padding: 18px 26px;
  background: white;
  border: none;
  margin: 15px 0;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
`;

const NavigationSubContainer = styled.div`
  width: 180px;
`;

const NavigationHeader = styled.div`
  font-weight: bold;
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;

  a {
    color: white;
  }
`;

const CopyrightContainer = styled.div`
  width: 100%;
`;

export default () => {
  return (
    <FooterContainer>
      <ExcerptContainer>
        <ExcerptTagline>Help us build a smarter us</ExcerptTagline>
        <p>The Programming Foundation commits to spreading awareness and education on computer programming and operating systems so that everyone is involved, and no one is left behind while the world advances.</p>
        <p>We are a registered 501(c)(3) nonprofit organization.</p>
        <ExcerptDonateButton>Donate</ExcerptDonateButton>
      </ExcerptContainer>
      <NavigationContainer>
        <NavigationSubContainer>
          <NavigationHeader>Learn</NavigationHeader>
          <NavigationList>
            <li><Link to="https://www.theprogrammingfoundation.org/operating-systems/blog-post-title-one-ek5em">Unix</Link></li>
            <li><Link to="https://www.theprogrammingfoundation.org/programming/blog-post-title-one-6mbh3">C</Link></li>
            <li><Link to="https://www.theprogrammingfoundation.org/programming/blog-post-title-two-wkm2z">Python</Link></li>
          </NavigationList>
        </NavigationSubContainer>
        <NavigationSubContainer>
          <NavigationHeader>About</NavigationHeader>
          <NavigationList>
            <li><Link to="/leadership">Leadership</Link></li>
            <li><Link to="/supporters">Supporters</Link></li>
            <li><Link to="/brand">Brand</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><a href="echo@smarterus.org">Contact</a></li>
          </NavigationList>
        </NavigationSubContainer>
        <NavigationSubContainer>
          <NavigationHeader>Get Involved</NavigationHeader>
          <NavigationList>
            <li><Link to="/volunteers">Volunteering</Link></li>
            <li><a href="https://github.com/The-Programming-Foundation">Open source</a></li>
            <li><Link to="/podcast">Podcast</Link></li>
            <li><a href="https://us17.campaign-archive.com/home/?id=8ed970028d&u=2b5505306c208a54f7daff686">Newsletter</a></li>
          </NavigationList>
        </NavigationSubContainer>
      </NavigationContainer>
      <CopyrightContainer>
        <hr />
        <p>© 2020 The Programming Foundation</p>
      </CopyrightContainer>
    </FooterContainer>
  );
};