import React, { useState, useEffect } from 'react';

import * as ApiService from '../../utils/api';
import { AuthProp,FilteredHospital,Hospital } from '../../Typescript-Interfaces/Types';
import { LocalHospital } from '@mui/icons-material';

import {
  Button,
  Modal,
  ModalDialog,
  Stack,
  Typography,
  FormControl,
  Select,
  Option,
} from '@mui/joy';

type Props = {
  Auth: AuthProp;
}

const UserRegister = ({ Auth}:Props) => {
  const [hospital, setHospital] = useState<string|null>('');
  const [hospitals, setHospitals] = useState<FilteredHospital[]>([]);
  const [open, setOpen] = useState<boolean>(true);
  
  const handleHospitalChange = (newValue:string|null) => {
    setHospital(newValue);
  };

  const getHospitalsName = async () => {
    const hospitals:Hospital[] = await ApiService.getAllHospitals();
    const names = hospitals.map((hospital) => ({
      label: hospital.name,
      select: 'hospital',
      id: hospital.id,
    }));
    setHospitals(names);
  };

  const handleSubmit = () => {
    try {
      if (Auth.user) {
        const userData = {
          name: Auth.user.name,
          email: Auth.user.email,
          hospitalId: hospital,
        };
        ApiService.createUser(userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHospitalsName();
  }, []);

  return (
    <div className='user-register'>
      <Modal open={open}>
        <ModalDialog aria-labelledby='hospital-modal' sx={{ maxWidth: 500 }}>
          <Typography id='hospital-modal'>
            <strong>Which hospital are you from?</strong>
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit;
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <Select
                  startDecorator={<LocalHospital />}
                  placeholder='Select a Hospital'
                  value={hospital}
                  onChange={(e, newValue) => handleHospitalChange(newValue)}
                >
                  {hospitals &&
                    hospitals.length > 0 &&
                    hospitals.map((hospital) => (
                      <Option key={hospital.id} value={hospital.id}>
                        {hospital.label}
                      </Option>
                    ))}
                </Select>
              </FormControl>
              <Button
                onClick={() => {
                  handleSubmit();
                  setOpen(false);
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default UserRegister;
