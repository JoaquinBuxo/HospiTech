import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// styles
import "./App.css";
import { CssVarsProvider } from "@mui/joy/styles";
import "@fontsource/public-sans";

// pages
import Equipments from "./pages/Equipments/Equipments";
import EquipmentDetail from "./pages/EquipmentDetail/EquipmentDetail";
import CreateEquipment from "./pages/CreateEquipment/CreateEquipment";

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTHO_DOMAIN}
      clientId={import.meta.env.VITE_AUTHO_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div className="App">
        <CssVarsProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Equipments />} />
              <Route path="/equipments" element={<Equipments />} />
              <Route path="/create-equipment" element={<CreateEquipment />} />
              <Route
                path="/equipment-detail/:id"
                element={<EquipmentDetail />}
              />
            </Routes>
          </Router>
        </CssVarsProvider>
      </div>
    </Auth0Provider>
  );
}

export default App;
