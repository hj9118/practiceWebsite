import React from 'react';
import styled from 'styled-components';
import { DefaultBtn } from './GlobalStyle';
import { IoIosArrowRoundForward } from 'react-icons/io';
import img5 from '../images/img_5.jpg';

const Subscribe = () => {
  return (
    <Wrapper>
      <p>Subscribe our Newsletter</p>
      <div>
        <input type='email' placeholder='Your Email Address' />
        <DefaultBtn>
          Subscribe <IoIosArrowRoundForward className='arrow' />
        </DefaultBtn>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1400px;
  height: 320px;
  margin: 0 auto;
  border-radius: 30px;
  background-image: url(${img5});
  background-size: cover;
  background-position: bottom;

  p {
    font-size: 50px;
    font-family: 'Roboto';
    color: #fff;
    font-weight: bold;
    width: 350px;
  }

  input {
    height: 80px;
    border: none;
    border-radius: 16px;
    font-style: italic;
    font-size: 18px;
    padding: 0 174px 0 23px;
    margin-right: 6px;
  }
`;

export default Subscribe;
