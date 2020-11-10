import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo-portopao.jpg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-m5'>
        <Link to='/'>
          <img src={logo} alt='Ecommerce Porto Pao' className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              produtos
            </Link>
          </li>
        </ul>
        <Link to='/carrinho' className='ml-auto'>
          <ButtonContainer cart>
            <span className='mr-2'>
              <i className='fas fa-cart-plus' /> Meu carrinho
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);

  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
