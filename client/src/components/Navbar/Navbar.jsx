import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem, Link } from '@mui/joy';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import './Navbar.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        variant='outlined'
        color='neutral'
        onClick={handleClick}
        endDecorator={<ArrowDropDown />}
      >
        John Doe <Avatar>JD</Avatar>
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
        <MenuItem onClick={handleClose}>
          <Link
            component={RouterLink}
            color='neutral'
            underline='none'
            disabled
            to='/'
          >
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
