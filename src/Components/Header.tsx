import React from 'react'
import './Header.css'
import logo from '../images/nn_design_logo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to="/home">
        <img className="header__logo" src={logo}/>
      </Link>
      

      <div className='header__search'>
        <input
          className='header__searchInput'
          type='text'
        />
        <SearchIcon className='header__searchIcon'/>
      </div>

      <div className='header__nav'>
            <Link to="/checkout">
              <div className='header__option'>
                <span className='header__optionLineOne'>
                  Cart
                </span>

                <ShoppingCartIcon className='header__shoppingCart'/>

              </div>
            </Link>

            <div className='header__option'>
            <span className='header__optionLineTwo'>
                Sign In
            </span>

            <PersonIcon className='header__account'/>

            </div>
        </div>
    </div>
  )
}

export default Header
