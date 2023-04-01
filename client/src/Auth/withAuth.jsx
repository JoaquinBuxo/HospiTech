import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CircularProgress } from '@mui/joy';
import '../App.css';

/**
 * A higher-order component that provides authentication-related props to the wrapped component.
 * @param {React.Component} Component - The component to wrap.
 * @returns {React.Component} The wrapped component.
 */
const withAuth = (Component) => {
  return (props) => {
    const Auth = useAuth0();

    if (Auth.isLoading) {
      return (
        <div className='login-loading'>
          <CircularProgress />
        </div>
      );
    }

    if (!Auth.isAuthenticated) {
      return (
        <div className='logout-container'>
          <div className='logout'>
            You are not logged!
            <button onClick={() => Auth.loginWithRedirect()}>Log In</button>
          </div>
        </div>
      );
    }

    return <Component {...props} Auth={Auth} />;
  };
};

export default withAuth;
