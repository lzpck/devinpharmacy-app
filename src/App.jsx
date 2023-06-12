import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import 'react-toastify/dist/ReactToastify.css';
import RegisterPharmacyPage from "./components/RegisterPharmacyPage.jsx";

function HomePage() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" Component={RegisterPharmacyPage} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App;