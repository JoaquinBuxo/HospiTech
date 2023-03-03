import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// styles
import './App.css';
import { CssVarsProvider } from '@mui/joy/styles';
import '@fontsource/public-sans';

// pages
import Equipments from './pages/Equipments/Equipments';
import EquipmentDetail from './pages/EquipmentDetail';
import CreateEquipment from './pages/CreateEquipment/CreateEquipment';

function App() {
  return (
    <div className='App'>
      <CssVarsProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Equipments />} />
            <Route path='/equipments' element={<Equipments />} />
            <Route path='/create-equipment' element={<CreateEquipment />} />
            <Route path='/equipment-detail' element={<EquipmentDetail />} />
          </Routes>
        </Router>
      </CssVarsProvider>
    </div>
  );
}

export default App;
