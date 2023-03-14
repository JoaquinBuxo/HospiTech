import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EquipmentDetailInner.css';
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
    <div className="equipment-detail">
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
            <div className="item-detail__label">Type:</div>
            <div className="item-detail__value">{equipment.type}</div>
          </div>
          <div className="condition-equipment item-detail">
            <div className="item-detail__label">Condition:</div>
            <div className="item-detail__value">{equipment.condition}</div>
          </div>
          <div className="description-equipment item-detail">
            <div className="item-detail__label">Description:</div>
            <div className="item-detail__value">{equipment.description}</div>
          </div>
          <div className="serial-number-equipment item-detail">
            <div className="item-detail__label">Serial Number:</div>
            <div className="item-detail__value">{equipment.serialNumber}</div>
          </div>
          <div className="last-revision-equipment item-detail">
            <div className="item-detail__label">Last Revision:</div>
            <div className="item-detail__value">
              {moment(equipment.lastRevision).format('LL')}
            </div>
          </div>
          {equipment.repairs && equipment.repairs.length > 0 && (
            <div className="repairs-equipment item-detail">
              <div className="item-detail__label">Reparations:</div>
              <div className="item-detail__value">
                <ul>
                  {equipment.repairs.map((repair, index) => (
                    <li key={index}>{repair}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetailInner;
