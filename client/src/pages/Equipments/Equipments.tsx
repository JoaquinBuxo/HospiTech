import withAuth from "../../Auth/withAuth";
import EquipmentHomePage from "./EquipmentHomePage";
import { useState, useEffect} from "react";
import { AuthProp } from "../../Typescript-Interfaces/Types";
// components
import Navbar from "../../components/Navbar/Navbar";
import UserRegister from "../UserRegister/UserRegister";
import {userData}from '../../Typescript-Interfaces/Types'
// styles
import "./Equipments.css";
// api
import * as ApiService from "../../utils/api";
type Props = {
  Auth:AuthProp,
};

const Equipments = ({ Auth }:Props) => {
  const [checkUser, setCheckUser] = useState<boolean>(true);
  const checkUserRegister = async () => {
    const users:userData[] = await ApiService.getAllUsers();
    const registered = users.some((el) => {
      if(Auth.user)
      return el.email === Auth.user.email
    });
    setCheckUser(registered);
  };
  useEffect(() => {
    checkUserRegister();
  }, []);
  return (
    <div className="equipments">
      {!checkUser && <UserRegister Auth={Auth} />}
      <Navbar Auth={Auth} />
      <div className="container-equipments">
        <EquipmentHomePage />
      </div>
    </div>
  );
};

export default withAuth(Equipments);
