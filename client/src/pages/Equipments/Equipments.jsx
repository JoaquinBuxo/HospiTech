import React, { useState, useEffect } from 'react';

// components
import Navbar from '../../components/Navbar/Navbar';
import ListEquipments from '../../components/ListEquipments/ListEquipments';
import FilterBar from '../../components/FilterBar/FilterBar';

// styles
import { Grid, Card } from '@mui/joy';
import './Equipments.css';

// api
import * as ApiService from '../../utils/api';

const Equipments = () => {
  const [equipments, setEquipments] = useState([]);

  const getAllEquipments = async () => {
    const equipments = await ApiService.getAllEquipments();
    setEquipments([...equipments]);
    return equipments;
  };

  useEffect(() => {
    getAllEquipments();
  }, []);

  return (
    <div className='equipments'>
      <Navbar></Navbar>
      <div className='container-equipments'>
        <FilterBar></FilterBar>
        <ListEquipments equipments={equipments}></ListEquipments>
      </div>
    </div>
  );
};

export default Equipments;
