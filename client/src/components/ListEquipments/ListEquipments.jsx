import React from 'react';
import ItemEquipment from '../ItemEquipment/ItemEquipment';
import './ListEquipments.css';

import { Grid } from '@mui/joy';

const ListEquipments = ({ equipments }) => {
  return (
    <Grid container spacing={2} className='list-equipments' sx={{ margin: 0 }}>
      {equipments &&
        equipments.map((equipment) => (
          <Grid key={equipment.id} xs={3}>
            <ItemEquipment equipment={equipment}></ItemEquipment>
          </Grid>
        ))}
    </Grid>
  );
};

export default ListEquipments;
