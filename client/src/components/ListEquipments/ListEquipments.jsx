import React from 'react';
import { Link } from 'react-router-dom';
import ItemEquipment from '../ItemEquipment/ItemEquipment';
import './ListEquipments.css';

import { Grid } from '@mui/joy';

/**
 * Renders a list of equipment items.
 * @param {Object[]} equipments - The list of equipment to be rendered.
 * @returns {JSX.Element} - The JSX element representing the list of equipment.
 */
const ListEquipments = ({ equipments }) => {
  return (
    <Grid
      container
      spacing={2}
      className='list-equipments'
      sx={{ margin: 0, marginTop: 2.5 }}
    >
      {equipments &&
        equipments.map((equipment) => (
          <Grid key={equipment.id} xs={3}>
            <Link to={`/equipment-detail/${equipment.id}`}>
              <ItemEquipment equipment={equipment}></ItemEquipment>
            </Link>
          </Grid>
        ))}
    </Grid>
  );
};

export default ListEquipments;
