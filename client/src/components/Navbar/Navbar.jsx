import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem, Link } from '@mui/joy';
import './Navbar.css';

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
      <div className='logo'>LOGO</div>
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
        <MenuItem onClick={handleClose}>
          <Link
            component={RouterLink}
            color='neutral'
            underline='none'
            disabled
            to='/'
          >
            My account
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            component={RouterLink}
            color='neutral'
            underline='none'
            to='/equipments'
          >
            All Equipments
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            component={RouterLink}
            color='neutral'
            underline='none'
            to='/create-equipment'
          >
            Add new equipment
          </Link>
        </MenuItem>
        <MenuItem onClick={logoutSession}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
