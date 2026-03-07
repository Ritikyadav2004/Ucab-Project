import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { UserPlus, User, Mail, Phone, Lock, Car } from 'lucide-react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [vehicleType, setVehicleType] = useState('Sedan');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await axios.post('/api/auth/register', { 
        name, email, phone, password, role, 
        ...(role === 'driver' ? { vehicleType, vehicleNumber } : {})
      });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-5 fade-in">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card card-custom p-4 p-md-5">
            <div className="text-center mb-4">
              <div className="bg-secondary-custom text-white d-inline-flex p-3 rounded-circle mb-3">
                <UserPlus size={32} />
              </div>
              <h2 className="fw-bold font-poppins text-primary-custom">Create an Account</h2>
              <p className="text-muted-custom">Join UCab and start your journey today.</p>
            </div>
            
            {error && (
              <div className="alert alert-danger bg-error-custom text-white border-0 rounded-3 py-2 px-3 mb-4">
                <small>{error}</small>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label fw-medium text-muted-custom small">Full Name</label>
                  <div className="position-relative">
                    <User size={18} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted-custom" />
                    <input type="text" className="form-control form-control-custom ps-5" value={name} onChange={(e) => setName(e.target.value)} placeholder="Rahul Sharma" required />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <label className="form-label fw-medium text-muted-custom small">Email</label>
                  <div className="position-relative">
                    <Mail size={18} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted-custom" />
                    <input type="email" className="form-control form-control-custom ps-5" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="rahul@example.com" required />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <label className="form-label fw-medium text-muted-custom small">Phone Number</label>
                  <div className="position-relative">
                    <Phone size={18} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted-custom" />
                    <input type="tel" className="form-control form-control-custom ps-5" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 234 567 890" required />
                  </div>
                </div>
                
                <div className="col-12">
                  <label className="form-label fw-medium text-muted-custom small">Password</label>
                  <div className="position-relative">
                    <Lock size={18} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted-custom" />
                    <input type="password" className="form-control form-control-custom ps-5" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a strong password" required />
                  </div>
                </div>
                
                <div className="col-12">
                  <label className="form-label fw-medium text-muted-custom small">I want to sign up as a</label>
                  <select className="form-select form-control-custom" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Passenger</option>
                    <option value="driver">Driver</option>
                  </select>
                </div>
                
                {role === 'driver' && (
                  <div className="col-12 mt-3 p-3 bg-light rounded-3 border">
                    <h6 className="fw-bold text-primary-custom mb-3 d-flex align-items-center gap-2">
                      <Car size={18} /> Vehicle Details
                    </h6>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-medium text-muted-custom small">Vehicle Type</label>
                        <select className="form-select form-control-custom" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
                          <option value="Mini">UCab Mini</option>
                          <option value="Sedan">UCab Sedan</option>
                          <option value="SUV">UCab SUV</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-medium text-muted-custom small">Vehicle Number</label>
                        <input type="text" className="form-control form-control-custom" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} placeholder="e.g. ABC-1234" required />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-primary-custom w-100" disabled={isLoading}>
                    {isLoading ? <span className="spinner-border spinner-border-sm me-2"></span> : null}
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </div>
              </div>
            </form>
            
            <p className="text-center mt-4 mb-0 text-muted-custom">
              Already have an account? <Link to="/login" className="text-primary-custom text-decoration-none fw-bold">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
