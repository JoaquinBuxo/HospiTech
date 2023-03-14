import withAuth from "../../Auth/withAuth";
import EquipmentHomePage from "./EquipmentHomePage";
import React, { useState, useEffect, FC } from "react";
import { Auth0ContextInterface,User } from "@auth0/auth0-react";
// components
import Navbar from "../../components/Navbar/Navbar";
import UserRegister from "../UserRegister/UserRegister";
import {UserData}from '../../Typescript-Interfaces/Types'
// styles
import "./Equipments.css";
// api
import * as ApiService from "../../utils/api";
type Props = {
  Auth: User,
};

const Equipments:FC<Props> = ({ Auth }) => {
  const [checkUser, setCheckUser] = useState<boolean>(true);
  const checkUserRegister = async () => {
    const users:UserData[] = await ApiService.getAllUsers();
    const registered = users.some((el) => el.email === Auth.user.email);
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
