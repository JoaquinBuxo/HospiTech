import React from 'react';
import moment from 'moment';

import { Card, AspectRatio, CardOverflow, Divider, Typography } from '@mui/joy';
import './ItemEquipment.css';

/**
 * A card displaying information about an equipment item
 * @param {Object} props - The props object
 * @param {Object} props.equipment - The equipment object containing its details
 * @returns {JSX.Element} - The component's markup
 */
const ItemEquipment = ({ equipment }) => {
  return (
    <Card variant='outlined' className='item-equipment'>
      <CardOverflow>
        <AspectRatio ratio='2'>
          <img
            className='img-equipment'
            src={equipment.images[0]}
            loading='lazy'
            alt={equipment.model}
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level='h2' sx={{ fontSize: 'md', mt: 2 }}>
        {equipment.model}
      </Typography>
      <Typography level='body2' sx={{ mt: 0.5, mb: 2 }}>
        {equipment.owner}
      </Typography>
      <Divider />
      <CardOverflow
        variant='soft'
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          bgcolor: 'background.level1',
        }}
      >
        <Typography
          level='body3'
          sx={{ fontWeight: 'md', color: 'text.secondary' }}
        >
          Last revision:
        </Typography>
        <Divider orientation='vertical' />
        <Typography
          level='body3'
          sx={{ fontWeight: 'md', color: 'text.secondary' }}
        >
          {moment(equipment.lastRevision).format('LL')}
        </Typography>
      </CardOverflow>
    </Card>
  );
};

export default ItemEquipment;
