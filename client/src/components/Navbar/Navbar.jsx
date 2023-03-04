import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem, Link } from '@mui/joy';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import './Navbar.css';
import { withAuth } from '../../Auth/withAuth';

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
    // logout({ logoutParams: { returnTo: window.location.origin } });
    Auth.logout({ returnTo: `${window.location.origin}/login` });
  };

  return (
    <div className='navbar'>
      <div className='logo'>LOGO</div>
      <button onClick={() => Auth.loginWithRedirect()}>Log In</button>
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
        {/* <Avatar alt={Auth.user.name} src={Auth.user.picture} /> */}
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

export default withAuth(Navbar);
