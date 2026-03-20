import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Placeholder routes for future pages */}
        <Route path="/login" element={<div className="min-h-screen pt-32 text-center text-white">Login Page (Coming Soon)</div>} />
        <Route path="/signup" element={<div className="min-h-screen pt-32 text-center text-white">Signup Page (Coming Soon)</div>} />
        <Route path="/dashboard" element={<div className="min-h-screen pt-32 text-center text-white">Dashboard (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
