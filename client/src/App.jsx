import { useState } from 'react';
import './App.css';
import { CssVarsProvider } from '@mui/joy/styles';
import '@fontsource/public-sans';

// components
import Equipments from './pages/Equipments/Equipments';
import CreateEquipment from './pages/CreateEquipment/CreateEquipment';

function App() {
  return (
    <div className='App'>
      <CssVarsProvider>
        {/* <Equipments /> */}
        <CreateEquipment />
      </CssVarsProvider>
    </div>
  );
}

export default App;
