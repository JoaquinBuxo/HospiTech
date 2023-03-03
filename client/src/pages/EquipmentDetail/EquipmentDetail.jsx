import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './EquipmentDetail.css';

// api
import * as ApiService from '../../utils/api';

const EquipmentDetail = () => {
  const [equipment, setEquipment] = useState({});
  const { id } = useParams();

  const getEquipment = async () => {
    const equipment = await ApiService.getEquipmentById(id);
    setEquipment(equipment);
    console.log(equipment);
  };

  useEffect(() => {
    getEquipment();
  }, []);

  return (
    <div className='equipment-detail'>
      <Navbar></Navbar>
      <div className='container-equipment-detail'>
        <div className='image-equipment'>
          <img src={equipment.model} alt={equipment.model} />
        </div>
        <div className='features-equipment'>
          <div className='model-equipment'>
            <h2>{equipment.model}</h2>
          </div>
          <div className='type-equipment'>
            <b>Type: </b>
            {equipment.type}
          </div>
          <div className='condition-equipment'>
            <b>Condition: </b>
            {equipment.condition}
          </div>
          <div className='description-equipment'>
            <b>Description: </b>
            {equipment.description}
          </div>
          <div className='serial-number-equipment'>
            <b>Serial Number: </b>
            {equipment.serialNumber}
          </div>
          <div className='last-revision-equipment'>
            <b>Last Revision: </b>
            {equipment.lastRevision}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetail;
