import React, { useEffect } from 'react';
import Authentication from '../../wrappers/Authentication';

import Navbar from '../../components/Navbar/Navbar';
import EquipmentDetailInner from './EquipmentDetailInner';

const EquipmentDetail = ({ Auth }) => {
  useEffect(() => console.log(Auth), []);

  return (
    <Authentication>
      <div className="equipment-detail">
        <Navbar Auth={Auth}></Navbar>
        <EquipmentDetailInner />
      </div>
    </Authentication>
  );
};

export default EquipmentDetail;
