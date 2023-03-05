import React, { useState } from 'react';
import styled from 'styled-components';
import { Dropdown } from './Dropdown';
import Logo from '../images/Logo.png';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <img src={Logo} alt='Logo' width={36} />
      <a href='/' className='logo'>
        Organick
      </a>
      <a href='/'>Home</a>
      <a href='/about-us'>About Us</a>
      <a href='/shop'>Shop</a>
      <ol onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        Pages
        <IoIosArrowDown />
        {open && <Dropdown />}
      </ol>
      <a href='/contact-us'>Contact Us</a>
      <div className='blank' style={{ width: '120px' }}></div>
      <Cart>
        <AiOutlineShoppingCart className='cart-icon' />
        Cart 0
      </Cart>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 30px 0;

  .logo {
    font-size: 32px;
    font-weight: bold;
    &:hover {
      color: #274c5b;
    }
  }

  a {
    color: #274c5b;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: bold;
    padding: 20px;
    &:hover {
      color: #7eb693;
      transition: color 0.2s ease 0s;
    }
    &.active {
      background-color: black;
    }
  }

  ol {
    color: #274c5b;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: bold;
    padding: 40px 20px;
  }
`;

const Cart = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-right: 25px;
  border-radius: 33px;
  border: 1px solid #e0e0e0;
  font-size: 18px;
  font-weight: bold;
  color: #274c5b;

  :hover {
    background-color: #7eb693;
    color: #f9f8f8;
    transition: all 0.2s ease 0s;
    border: none;
  }

  .cart-icon {
    background-color: #274c5b;
    color: #fff;
    font-size: 22px;
    border-radius: 50%;
    padding: 10px;
    margin: 5px 12px 5px 6px;
  }
`;

export default Header;
