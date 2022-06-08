import React from 'react';
import logo from '../../assets/logo.svg';
import plus from '../../assets/plus.svg';
import lady from '../../assets/lady.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar-container'>
        <img src={logo} alt='logo'/>
        <h3 className='NFT-Marketplace'>NFT Marketplace</h3>
        <span className='Collections'>Activity</span>
        <span className='Collections'>Collections</span>
        <div className='Rectangle'>
            <span className='Search'>Search</span>
        </div>
        <div className='navbar-builder'>
            <img src={plus} alt='plus'/>
            <span className='Builder'>Builder</span>
        </div>
        <div className='navbar-connectwallet'>
            <span className='Connect-Wallet'>Connect Wallet</span>
        </div>
        <img src={lady} alt='lady' height={50} width={50}/>

    </div>
  )
}

export default Navbar