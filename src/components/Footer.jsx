import React from 'react';
import Subscribe from './Subscribe';
import logo from '../images/Logo.png';
import styled from 'styled-components';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
} from 'react-icons/io';

const Footer = () => {
  return (
    <>
      <Subscribe />
      <Wrapper>
        <Contact className='contact'>
          <h3>Contact Us</h3>
          <b>Email</b>
          <a href='mailto:needhelp@organick.com'>needhelp@organick.com</a>
          <br />
          <b>Phone</b>
          <a href='tel:12312541452'>123 (1254) 1252</a>
          <br />
          <b>Address</b>
          <p>88 Road, Brooklyn Street, USA</p>
        </Contact>
        <Main>
          <Wrapper>
            <img src={logo} width={36} />
            <h3>Organick</h3>
          </Wrapper>
          <p>
            We are a popular and farming company aspiring to be a leader in the
            Organic food industry.
          </p>
          <Wrapper>
            <Icon>
              <IoLogoFacebook />
            </Icon>
            <Icon>
              <IoLogoTwitter />
            </Icon>
            <Icon>
              <IoLogoInstagram />
            </Icon>
            <Icon>
              <IoLogoPinterest />
            </Icon>
          </Wrapper>
        </Main>
        <Pages>
          <h3> Utility Pages</h3>
          <a href='/style-guide'>Style Guide</a>
          <a href='/401'>Protected</a>
          <a href='/*'>Page Not Found</a>
          <a href='/changelog'>Changelog</a>
          <a href='/licenses'>Licenses</a>
        </Pages>
      </Wrapper>
      <Copyright>
        <p>
          Copyright © <b>Organick</b> | Designed by <b>VictorFlow</b> - Powered
          by <b>Webflow</b>
        </p>
      </Copyright>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
const FooterGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px 0;

  h3 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 32px;
    color: #274c5b;
  }
  b {
    font-size: 18px;
    font-weight: bold;
    line-height: 165%;
    color: #525c60;
  }
  a,
  p {
    font-size: 18px;
    text-decoration: none;
    line-height: 165%;
    color: #525c60;
  }
  & + & {
    border-left: 1px solid #d4d4d4;
    height: 336px;
    padding: 0 40px;
  }
`;
const Contact = styled(FooterGrid)`
  width: 285px;
  text-align: right;
  padding-right: 40px;
`;
const Main = styled(FooterGrid)`
  text-align: center;
  width: 543px;
  p {
    margin-bottom: 49px;
  }
`;
const Pages = styled(FooterGrid)`
  a {
    line-height: 273%;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  font-size: 24px;
  border-radius: 50%;
  background-color: #eff6f1;
  color: #274c5b;
  & + & {
    margin-left: 15px;
  }
`;
const Copyright = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #525c60;
  padding: 25px;
  border-top: 1px solid #d4d4d4;
  b {
    font-weight: bold;
  }
`;

export default Footer;
