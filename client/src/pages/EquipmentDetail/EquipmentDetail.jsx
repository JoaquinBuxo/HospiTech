import React from 'react';
import withAuth from '../../Auth/withAuth';

import Navbar from '../../components/Navbar/Navbar';
import EquipmentDetailInner from './EquipmentDetailInner';

const EquipmentDetail = ({ Auth }) => {
  return (
    <>
      <Navbar Auth={Auth}></Navbar>
      <EquipmentDetailInner />
    </>
  );
};

export default withAuth(EquipmentDetail);
