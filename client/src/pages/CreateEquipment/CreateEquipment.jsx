import React from 'react';

import Navbar from '../../components/Navbar/Navbar';

import {
  Sheet,
  FormControl,
  FormLabel,
  Input,
  Button,
  Typography,
} from '@mui/joy';

const CreateEquipment = () => {
  return (
    <div className='create-equipment'>
      <Navbar></Navbar>
      <main>
        <Sheet
          sx={{
            width: '50%',
            mx: 'auto',
            my: 4,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
          }}
          variant='outlined'
        >
          <div>
            <Typography level='h4' component='h1'>
              <b>Create New Equipment</b>
            </Typography>
          </div>
          <FormControl>
            <FormLabel>Model</FormLabel>
            <Input name='model' placeholder='Da Vinci Surgical System' />
          </FormControl>
          <FormControl>
            <FormLabel>Serial Number</FormLabel>
            <Input name='serialNumber' placeholder='IS23456787654' />
          </FormControl>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <Input name='type' placeholder='surgical' />
          </FormControl>
          <FormControl>
            <FormLabel>Condition</FormLabel>
            <Input name='condition' placeholder='good' />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              name='description'
              placeholder="The Da Vinci System consists of a surgeon's console that is typically in the same room as the patient, and a patient-side cart with three to four interactive robotic arms (depending on the model) controlled from the console. The arms hold objects, and can act as scalpels, scissors, bovies, or graspers. The final arm controls the 3D cameras.[6] The surgeon uses the controls of the console to manoeuvre the patient-side cart's robotic arms. The system always requires a human operator."
            />
          </FormControl>
          <FormControl>
            <FormLabel>Hospital Owner</FormLabel>
            <Input name='owner' placeholder="Addenbrooke's Hospital" />
          </FormControl>
          <FormControl>
            <FormLabel>Last Revision</FormLabel>
            <Input name='lastRevision' type='date' placeholder='MM/DD/YYYY' />
          </FormControl>

          <Button sx={{ mt: 1 }}>CREATE</Button>
        </Sheet>
      </main>
    </div>
  );
};

export default CreateEquipment;
