import React from 'react';
import ItemEquipment from '../ItemEquipment/ItemEquipment';
import './ListEquipments.css';

const ListEquipments = ({ equipments }) => {
  return (
    <div className='list-equipments'>
      {equipments &&
        equipments.map((equipment) => (
          <ItemEquipment
            key={equipment.id}
            equipment={equipment}
          ></ItemEquipment>
        ))}
    </div>
  );
};

export default ListEquipments;
