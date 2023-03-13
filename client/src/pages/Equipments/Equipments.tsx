import withAuth from "../../Auth/withAuth";
import EquipmentHomePage from "./EquipmentHomePage";
import React, { useState, useEffect,FC } from "react";
// components
import Navbar from "../../components/Navbar/Navbar";
import UserRegister from "../UserRegister/UserRegister";

// styles
import "./Equipments.css";
// api
import * as ApiService from "../../utils/api";

const Equipments:FC = ({ Auth }) => {
  const [checkUser, setCheckUser] = useState(true);
  const checkUserRegister = async () => {
    const users = await ApiService.getAllUsers();
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
