import * as ApiService from "../../utils/api";
import ListEquipments from "../../components/ListEquipments/ListEquipments";
import FilterBar from "../../components/FilterBar/FilterBar";
import React, { useState, useEffect } from "react";
import {
  Equipment,
  FilteredEquipment,
  FilteredHospital,
} from "../../Typescript-Interfaces/Types";
// styles
import "./Equipments.css";
import { isNull } from "util";

const EquipmentHomePage = function () {
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [filterEquipments, setFilterEquipments] = useState<Equipment[]>([]);
  const [filterHospitals, setFilterHospitals] = useState<Equipment[]>([]);
  const [allEquipments, setAllEquipments] = useState<Equipment[]>([]);

  const getAllEquipments = async () => {
    const equipments: Equipment[] = await ApiService.getAllEquipments();
    setEquipments([...equipments]);
    setAllEquipments([...equipments]);
    return equipments;
  };

  const handleSearchChange = (
    event: React.FormEvent<HTMLLinkElement>,
    newValue: FilteredEquipment
  ) => {
    if (!newValue) {
      setFilterEquipments([]);
    } else {
      const filterEquipment = allEquipments.filter(
        (equipment) => newValue.label === equipment.model
      );
      setFilterEquipments((prevState) => [...prevState, ...filterEquipment]);
    }
  };

  const handleOrderChange = (
    event: React.FormEvent<HTMLLinkElement>,
    newValue: FilteredEquipment
  ) => {
    if (newValue) {
      newValue.label === "Last Added"
        ? equipments.sort(
            (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
          )
        : equipments.sort(
            (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
          );
      setEquipments([...equipments]);
    }
  };

  const handleHospitalChange = (
    event: React.FormEvent<HTMLLinkElement>,
    newValue: FilteredHospital
  ) => {
    if (!newValue) {
      setFilterHospitals([]);
    } else {
      const filterHospital = allEquipments.filter(
        (equipment) => newValue.id === equipment.ownerId
      );
      setFilterHospitals([...filterHospital]);
    }
  };

  const checkFilterValues = () => {
    if (filterHospitals.length != 0 && filterEquipments.length != 0) {
      const checkCommonEquipments = filterHospitals.filter((element) =>
        filterEquipments.includes(element)
      );
      console.log(checkCommonEquipments);
      setEquipments([...checkCommonEquipments]);
    } else if (filterEquipments.length != 0) {
      setEquipments([...filterEquipments]);
    } else if (filterHospitals.length != 0) {
      setEquipments([...filterHospitals]);
    } else {
      getAllEquipments();
    }
  };

  useEffect(() => {
    checkFilterValues();
  }, [filterEquipments, filterHospitals]);
  useEffect(() => {
    getAllEquipments();
  }, []);
  return (
    <>
      <FilterBar
        handleSearchChange={handleSearchChange}
        handleOrderChange={handleOrderChange}
        handleHospitalChange={handleHospitalChange}
      ></FilterBar>
      <ListEquipments equipments={equipments}></ListEquipments>
    </>
  );
};
export default EquipmentHomePage;
