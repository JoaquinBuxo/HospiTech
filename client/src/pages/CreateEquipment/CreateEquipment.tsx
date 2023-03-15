import React, { useState } from 'react';
import { AuthProp } from '../../Typescript-Interfaces/Types';
import withAuth from '../../Auth/withAuth';
import Navbar from '../../components/Navbar/Navbar';
import CreateEquipmentForm from './CreateEquipmentForm';
import { CheckCircle, CloseRounded, Report } from '@mui/icons-material';

import { Typography, Alert, IconButton } from '@mui/joy';

import './CreateEquipment.css';

type Props = {
  Auth: AuthProp;
};

const CreateEquipment = ({ Auth }: Props) => {
  if (!Auth.user) return;

  const email = Auth.user.email;
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  return (
    <div className="create-equipment">
      <Navbar Auth={Auth}></Navbar>
      {alertSuccess && (
        <Alert
          key="Success"
          sx={{ alignItems: 'flex-start' }}
          startDecorator={React.cloneElement(<CheckCircle />, {
            sx: { mt: '2px', mx: '4px' },
            fontSize: 'xl2',
          })}
          variant="soft"
          color="success"
          endDecorator={
            <IconButton
              variant="soft"
              size="sm"
              color="success"
              onClick={() => setAlertSuccess(false)}
            >
              <CloseRounded />
            </IconButton>
          }
        >
          <div>
            <Typography
              fontWeight="lg"
              mt={0.25}
            >
              Success
            </Typography>
            <Typography
              fontSize="sm"
              sx={{ opacity: 0.8 }}
            >
              Equipment created correctly.
            </Typography>
          </div>
        </Alert>
      )}

      {alertError && (
        <Alert
          key="Error"
          sx={{ alignItems: 'flex-start' }}
          startDecorator={React.cloneElement(<Report />, {
            sx: { mt: '2px', mx: '4px' },
            fontSize: 'xl2',
          })}
          variant="soft"
          color="danger"
          endDecorator={
            <IconButton
              variant="soft"
              size="sm"
              color="danger"
              onClick={() => setAlertError(false)}
            >
              <CloseRounded />
            </IconButton>
          }
        >
          <div>
            <Typography
              fontWeight="lg"
              mt={0.25}
            >
              Error
            </Typography>
            <Typography
              fontSize="sm"
              sx={{ opacity: 0.8 }}
            >
              There was some error.
            </Typography>
          </div>
        </Alert>
      )}
      <CreateEquipmentForm email={email!} />
    </div>
  );
};

export default withAuth(CreateEquipment);
