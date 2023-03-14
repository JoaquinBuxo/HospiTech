import withAuth from '../../Auth/withAuth';
import { AuthProp } from '../../Typescript-Interfaces/Types';

import Navbar from '../../components/Navbar/Navbar';
import EquipmentDetailInner from './EquipmentDetailInner';

type Props = {
  Auth: AuthProp;
};

const EquipmentDetail = ({ Auth }: Props) => {
  return (
    <>
      <Navbar Auth={Auth}></Navbar>
      <EquipmentDetailInner />
    </>
  );
};

export default withAuth(EquipmentDetail);
