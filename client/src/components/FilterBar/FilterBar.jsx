import React from 'react';

import { FormControl, Grid, Autocomplete, FormLabel } from '@mui/joy';
import { Search, LocalHospital, FilterList } from '@mui/icons-material';

import './FilterBar.css';

const FilterBar = () => {
  const hospitals = ['test'];
  const equipments = ['test'];
  const order = ['First Added', 'Last Added'];

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
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
