import React from 'react';
import { Avatar } from '@mui/joy';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>LOGO</div>
      <div className='user-navbar'>
        John Doe<Avatar>JD</Avatar>
      </div>
    </div>
  );
};

export default Navbar;
