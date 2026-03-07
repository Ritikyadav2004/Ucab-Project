import { Link, useNavigate } from 'react-router-dom';
import { Car, User as UserIcon, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top" style={{ boxShadow: '0 2px 15px rgba(0,0,0,0.05)' }}>
      <div className="container py-1">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 font-poppins fw-bold text-primary-custom fs-4">
          <div className="bg-primary-custom text-white p-2 rounded-3 d-flex align-items-center justify-content-center">
            <Car size={24} />
          </div>
          UCab
        </Link>
        
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 mt-3 mt-lg-0">
            {user ? (
              <>
                <Link to="/dashboard" className="text-decoration-none text-muted-custom fw-medium hover-primary smooth-transition d-flex align-items-center gap-2">
                  <UserIcon size={18} /> Dashboard
                </Link>
                <Link to="/history" className="text-decoration-none text-muted-custom fw-medium hover-primary smooth-transition">
                  Ride History
                </Link>
                <div className="d-none d-lg-block border-start h-50 mx-2"></div>
                <div className="d-flex align-items-center gap-3">
                  <span className="fw-semibold text-primary-custom">{user.name}</span>
                  <button onClick={handleLogout} className="btn btn-outline-danger btn-sm d-flex align-items-center gap-2 rounded-pill px-3">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-decoration-none text-muted-custom fw-medium px-2">Log in</Link>
                <Link to="/register" className="btn btn-primary-custom px-4 rounded-pill">Sign up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
