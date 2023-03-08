import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CircularProgress } from '@mui/joy';
import '../App.css';

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
