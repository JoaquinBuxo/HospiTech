import React from 'react';

// components
import Navbar from '../../components/Navbar/Navbar';
import ListEquipments from '../../components/ListEquipments/ListEquipments';
import FilterBar from '../../components/FilterBar/FilterBar';

// styles
import { Grid, Card } from '@mui/joy';
import './Equipments.css';

const Equipments = () => {
  return (
    <div className='equipments'>
      <Navbar></Navbar>
      <div className='container-equipments'>
        <FilterBar></FilterBar>
        <ListEquipments></ListEquipments>
      </div>
    </div>
  );
};

export default Equipments;
