import React, { useState, useEffect } from 'react';

import { FormControl, Grid, Autocomplete, FormLabel } from '@mui/joy';
import { Search, LocalHospital, FilterList } from '@mui/icons-material';
import './FilterBar.css';

import * as ApiService from '../../utils/api';

const FilterBar = (props) => {
  const [equipments, setEquipments] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [order, setOrder] = useState([]);

  const getHospitalsName = async () => {
    const hospitals = await ApiService.getAllHospitals();
    const names = hospitals.map((hospital) => ({
      label: hospital.name,
      select: 'hospital',
      id: hospital.id,
    }));
    setHospitals(names);
  };

  const getEquipmentsName = async () => {
    const equipments = await ApiService.getAllEquipments();
    const names = equipments.map((equipment) => equipment.model);
    const filterNames = [...new Set(names)].map((name) => ({
      label: name,
      select: 'equipment',
    }));
    setEquipments(filterNames);
  };

  useEffect(() => {
    getHospitalsName();
    getEquipmentsName();
    setOrder([
      { label: 'First Added', select: 'order' },
      { label: 'Last Added', select: 'order' },
    ]);
  }, []);

  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      sx={{ margin: 0 }}
      className='filter-bar'
    >
      <Grid xs={3}>
        <FormControl>
          <FormLabel>Search</FormLabel>
          <Autocomplete
            startDecorator={<Search />}
            placeholder='Search Equipment'
            options={equipments}
            onChange={props.handleSearchChange}
          />
        </FormControl>
      </Grid>
      <Grid xs={3}>
        <FormControl>
          <FormLabel>Order by</FormLabel>
          <Autocomplete
            startDecorator={<FilterList />}
            placeholder='Order by...'
            options={order}
            onChange={props.handleOrderChange}
          />
        </FormControl>
      </Grid>
      <Grid xs={3}>
        <FormControl>
          <FormLabel>Filter Hospital</FormLabel>
          <Autocomplete
            startDecorator={<LocalHospital />}
            placeholder='Hospital'
            options={hospitals}
            onChange={props.handleHospitalChange}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
