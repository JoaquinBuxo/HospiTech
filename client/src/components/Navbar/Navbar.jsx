import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem, Link } from '@mui/joy';
import './Navbar.css';

/**
 * Navbar component that displays the logo and user details with logout functionality
 * @param {AuthData} Auth - The authentication data passed down from App component
 */
const Navbar = ({ Auth }) => {
  // manage menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutSession = () => {
    Auth.logout({ returnTo: `${window.location.origin}` });
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link
          component={RouterLink}
          underline='none'
          to='/equipments'
          sx={{ height: '100%' }}
        >
          <img
            className='logo-img'
            src='https://res.cloudinary.com/dpxwwazeb/image/upload/v1678122463/logo-hospitech_u8zhxu.png'
            alt='Logo HospitalTech'
          />
        </Link>
      </div>

      <Button
        id='menu-button'
        className='user-navbar'
        aria-controls={open ? 'navbar-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        variant='text'
        color='neutral'
        onClick={handleClick}
      >
        {Auth.user ? (
          <>
            {Auth.user.name}
            <Avatar
              alt={Auth.user.name}
              src={Auth.user.picture}
              sx={{ marginLeft: 1 }}
            />
          </>
        ) : (
          'NO LOOGED'
        )}
      </Button>
      <Menu
        id='navbar-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby='menu-button'
      >
        {/* TODO: Create user details page
        <Link
          component={RouterLink}
          color='neutral'
          underline='none'
          disabled
          to='/'
        >
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Link> */}
        <Link
          component={RouterLink}
          color='neutral'
          underline='none'
          to='/equipments'
        >
          <MenuItem onClick={handleClose}>All Equipments</MenuItem>
        </Link>
        <Link
          component={RouterLink}
          color='neutral'
          underline='none'
          to='/create-equipment'
        >
          <MenuItem onClick={handleClose}>Add new equipment</MenuItem>
        </Link>
        <MenuItem onClick={logoutSession}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
