import React from 'react';

import { Card } from '@mui/joy';

const ItemEquipment = ({ equipment }) => {
  return <Card className='item-equipment'>{equipment.id}</Card>;
};

export default ItemEquipment;
