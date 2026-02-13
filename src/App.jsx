import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import SurprisePage from './pages/SurprisePage.jsx';
import './App.css' 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </Router>
  );
}

export default App;