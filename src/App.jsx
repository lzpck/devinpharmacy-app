import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import 'react-toastify/dist/ReactToastify.css';
import RegisterPharmacyPage from "./components/RegisterPharmacyPage.jsx";
import RegisterMedicinePage from "./components/RegisterMedicinePage.jsx";
import MedicationList from "./components/MedicationList.jsx";
import FAQPage from "./components/FAQPage.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
  return (
    <UserProvider>
      <Router>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro-farmacia" element={<RegisterPharmacyPage />} />
      <Route path="/cadastro-medicamento" element={<RegisterMedicinePage />} />
      <Route path="/lista-medicamentos" element={<MedicationList />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
      </Router>
    </UserProvider>
  )
}

export default App;