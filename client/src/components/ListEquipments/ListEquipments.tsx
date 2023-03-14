import { Link } from 'react-router-dom';
import ItemEquipment from '../ItemEquipment/ItemEquipment';
import './ListEquipments.css';

import { Grid } from '@mui/joy';

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

          <Grid className="displayEquipment" key={equipment.id} xs={3}>
            <Link to={`/equipment-detail/${equipment.id}`}>
              <ItemEquipment equipment={equipment}></ItemEquipment>
            </Link>
          </Grid>

        ))}
    </Grid>
  );
};

export default ListEquipments;
