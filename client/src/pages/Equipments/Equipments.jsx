import React, { useState, useEffect } from 'react';
import withAuth from '../../Auth/withAuth';

// components
import Navbar from '../../components/Navbar/Navbar';
import ListEquipments from '../../components/ListEquipments/ListEquipments';
import FilterBar from '../../components/FilterBar/FilterBar';

// styles
import './Equipments.css';

// api
import * as ApiService from '../../utils/api';

const Equipments = ({ Auth }) => {
  const [equipments, setEquipments] = useState([]);
  const [filterEquipments, setFilterEquipments] = useState([]);
  const [filterHospitals, setFilterHospitals] = useState([]);
  const [allEquipments, setAllEquipments] = useState([]);

  const getAllEquipments = async () => {
    const equipments = await ApiService.getAllEquipments();
    setEquipments([...equipments]);
    setAllEquipments([...equipments]);
    return equipments;
  };

  const handleSearchChange = (event, newValue) => {
    if (!newValue) {
      setFilterEquipments([]);
    } else {
      const filterEquipment = allEquipments.filter(
        (equipment) => newValue.label === equipment.model
      );
      setFilterEquipments((prevState) => [...prevState, ...filterEquipment]);
    }
  };

  const handleOrderChange = (event, newValue) => {
    if (newValue) {
      newValue.label === 'Last Added'
        ? equipments.sort(
            (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
          )
        : equipments.sort(
            (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
          );
      setEquipments([...equipments]);
    }
  };

  const handleHospitalChange = (event, newValue) => {
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

  return (
    <div className='equipments'>
      <Navbar Auth={Auth}></Navbar>
      <div className='container-equipments'>
        <FilterBar
          handleSearchChange={handleSearchChange}
          handleOrderChange={handleOrderChange}
          handleHospitalChange={handleHospitalChange}
        ></FilterBar>
        <ListEquipments equipments={equipments}></ListEquipments>
      </div>
    </div>
  );
};

export default withAuth(Equipments);
