import { AuthProp } from '../../Typescript-Interfaces/Types';
import './Navbar.css';
import { NavBarDetails } from './NavBarDetails';

type Props = {
  Auth: AuthProp;
};

const Navbar = ({ Auth }: Props) => {
  const logout = Auth.logout;
  const user = Auth.user;

  return (
    <NavBarDetails
      user={user!}
      logout={logout}
    />
  );
};

export default Navbar;
