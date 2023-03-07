import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const withAuth = (Component) => {
  return (props) => {
    const Auth = useAuth0();

    if (Auth.isLoading) {
      return <div>Loading ...</div>;
    }

    if (!Auth.isAuthenticated) {
      return (
        <div>
          You are not logged!
          <button onClick={() => Auth.loginWithRedirect()}>Log In</button>
        </div>
      );
    }

    return <Component {...props} Auth={Auth} />;
  };
};

export default withAuth;
