import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import BookRide from './pages/BookRide.jsx';
import RideTracking from './pages/RideTracking.jsx';
import RideHistory from './pages/RideHistory.jsx';

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/book" element={<BookRide />} />
          <Route path="/track/:rideId" element={<RideTracking />} />
          <Route path="/history" element={<RideHistory />} />
        </Routes>
      </main>
    </div>
  );
}
