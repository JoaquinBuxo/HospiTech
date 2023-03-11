import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './EquipmentDetail.css';
import moment from 'moment';

// api
import * as ApiService from '../../utils/api';

const EquipmentDetailInner = () => {
  const [equipment, setEquipment] = useState({});
  const { id } = useParams();

  const getEquipment = async () => {
    const equipment = await ApiService.getEquipmentById(id);
    setEquipment(equipment);
  };

  useEffect(() => {
    getEquipment();
  }, []);

  return (
    <div className="container-equipment-detail">
      <div className="container-image-equipment">
        <img
          className="image-equipment"
          src={equipment.images ? equipment.images[0] : 'No Img'}
          alt={equipment.model}
        />
      </div>
      <div className="features-equipment equipment">
        <h1 className="model-equipment">{equipment.model}</h1>
        <div className="type-equipment item-detail">
          <strong>Type: </strong> {equipment.type}
        </div>
        <div className="condition-equipment item-detail">
          <strong>Condition: </strong> {equipment.condition}
        </div>
        <div className="description-equipment item-detail">
          <strong>Description: </strong> {equipment.description}
        </div>
        <div className="serial-number-equipment item-detail">
          <strong>Serial Number: </strong> {equipment.serialNumber}
        </div>
        <div className="last-revision-equipment item-detail">
          <strong>Last Revision: </strong>
          {moment(equipment.lastRevision).format('LL')}
        </div>
        {equipment.repairs && equipment.repairs.length > 0 && (
          <div className="repairs-equipment item-detail">
            <strong>Reparations: </strong>
            <ul>
              {equipment.repairs.map((repair, index) => (
                <li key={index}>{repair}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EquipmentDetailInner;
