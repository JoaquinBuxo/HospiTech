import React, { useState, useEffect } from 'react';

import { FormControl, Grid, Autocomplete, FormLabel } from '@mui/joy';
import { Search, LocalHospital, FilterList } from '@mui/icons-material';
import './FilterBar.css';

import * as ApiService from '../../utils/api';
import { Hospital, Equipment } from '../../Typescript-Interfaces/Types';

import {
  Filter,
  AutocompleteHandleChange,
} from '../../Typescript-Interfaces/Types';

type Props = {
  handleSearchChange: AutocompleteHandleChange;
  handleOrderChange: AutocompleteHandleChange;
  handleHospitalChange: AutocompleteHandleChange;
};

const FilterBar = ({
  handleSearchChange,
  handleOrderChange,
  handleHospitalChange,
}: Props) => {
  const [equipments, setEquipments] = useState<Filter[]>([]);
  const [hospitals, setHospitals] = useState<Filter[]>([]);
  const [order, setOrder] = useState<Filter[]>([]);

  const getHospitalsName = async () => {
    const hospitals = await ApiService.getAllHospitals();
    const names = hospitals.map((hospital: Hospital) => ({
      label: hospital.name,
      select: 'hospital',
      id: hospital.id,
    }));
    setHospitals(names);
  };

  const getEquipmentsName = async () => {
    const equipments = await ApiService.getAllEquipments();
    const names: string[] = equipments.map(
      (equipment: Equipment) => equipment.model
    );
    const filterNames = [...new Set(names)].map((name) => {
      return {
        label: name,
        select: 'equipment',
      };
    });

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
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ margin: 0 }}
      className="filter-bar"
    >
      <Grid xs={3}>
        <FormControl>
          <FormLabel>Search</FormLabel>
          <Autocomplete
            startDecorator={<Search />}
            placeholder="Search Equipment"
            options={equipments}
            onChange={handleSearchChange}
          />
        </FormControl>
      </Grid>
      <Grid xs={3}>
        <FormControl>
          <FormLabel>Order by</FormLabel>
          <Autocomplete
            startDecorator={<FilterList />}
            placeholder="Order by..."
            options={order}
            onChange={handleOrderChange}
          />
        </FormControl>
      </Grid>
      <Grid xs={3}>
        <FormControl>
          <FormLabel>Filter Hospital</FormLabel>
          <Autocomplete
            startDecorator={<LocalHospital />}
            placeholder="Hospital"
            options={hospitals}
            onChange={handleHospitalChange}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
