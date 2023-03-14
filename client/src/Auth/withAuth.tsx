import { useAuth0} from '@auth0/auth0-react';
import { CircularProgress } from '@mui/joy';
import '../App.css';
import { AuthProp} from '../Typescript-Interfaces/Types'
type Props = {
  Auth: AuthProp;
};

const withAuth = (Component: ({ Auth }: Props) => JSX.Element) => {
  return (prop: any) => {
    const AuthResponse = useAuth0();
    const Auth = {
      isAuthenticated: AuthResponse.isAuthenticated,
      user: AuthResponse.user,
      loginWithRedirect: AuthResponse.loginWithRedirect,
      isLoading: AuthResponse.isLoading,
      logout:AuthResponse.logout
    };

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
    } else {
      // Authenticated
      return <Component {...prop} Auth={Auth} />;
    }
  };
};

export default withAuth;
