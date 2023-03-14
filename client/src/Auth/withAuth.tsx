import React,{FC} from 'react';
import { useAuth0, Auth0ContextInterface, User } from '@auth0/auth0-react';
import { CircularProgress } from '@mui/joy';
import '../App.css';


const withAuth = (Component:React.FC) => {
  return (props:any) => {
    const Auth:Auth0ContextInterface<User> = useAuth0();

    // Loading...
    if (Auth.isLoading) {
      return (
        <div className="login-loading">
          <CircularProgress />
        </div>
      );
    }

    // Not Authenticated
    if (!Auth.isAuthenticated) {
      return (
        <div className="logout-container">
          <div className="logout">
            You are not logged!
            <button onClick={() => Auth.loginWithRedirect()}>Log In</button>
          </div>
        </div>
      );
    }

    // Authenticated
    return (
      <Component
        {...props}
        Auth={Auth}
      />
    );
  };
};

export default withAuth;
