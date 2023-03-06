import React, { useState } from 'react';
import styled from 'styled-components';
import { Dropdown } from './Dropdown';
import Logo from '../images/Logo.png';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <img src={Logo} alt='Logo' width={36} />
      <NavLink to='/' id='logo'>
        Organick
      </NavLink>
      <NavLink to='/' activeclassname='active'>
        Home
      </NavLink>
      <NavLink to='/about-us' activeclassname='active'>
        About Us
      </NavLink>
      <NavLink to='/shop' activeclassname='active'>
        Shop
      </NavLink>
      <ol onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        Pages
        <IoIosArrowDown />
        {open && <Dropdown />}
      </ol>
      <NavLink to='/contact-us' activeclassname='active'>
        Contact Us
      </NavLink>
      <div
        className='blank'
        activeclassname='active'
        style={{ width: '120px' }}
      ></div>
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

  #logo {
    color: #274c5b;
    font-size: 32px;
    font-weight: bold;
    :hover {
      
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
      color: #7eb693;
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
