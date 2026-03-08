import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext.jsx';
import { Mail, Lock, UserCircle } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.post('/api/auth/login', { email, password, role });
      login(response.data.token, response.data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-5 fade-in">
      <div className="row justify-content-center align-items-center min-vh-75">
        <div className="col-md-6 col-lg-5">
          <div className="card card-custom p-4 p-md-5">
            <div className="text-center mb-4">
              <div className="bg-primary-custom text-white d-inline-flex p-3 rounded-circle mb-3">
                <UserCircle size={32} />
              </div>
              <h2 className="fw-bold font-poppins text-primary-custom">Welcome Back</h2>
              <p className="text-muted-custom">Sign in to continue to UCab</p>
            </div>
            
            {error && (
              <div className="alert alert-danger bg-error-custom text-white border-0 rounded-3 py-2 px-3 mb-4 d-flex align-items-center">
                <small>{error}</small>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3 position-relative">
                <label className="form-label fw-medium text-muted-custom small">Email Address</label>
                <div className="position-relative">
                  <Mail size={18} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted-custom" />
                  <input 
                    type="email" 
                    className="form-control form-control-custom ps-5" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-3 position-relative">
                <div className="d-flex justify-content-between align-items-center">
                  <label className="form-label fw-medium text-muted-custom small mb-0">Password</label>
                  <Link to="#" className="text-primary-custom text-decoration-none small">Forgot?</Link>
                </div>
                <div className="position-relative mt-2">
                  <Lock size={18} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted-custom" />
                  <input 
                    type="password" 
                    className="form-control form-control-custom ps-5" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label fw-medium text-muted-custom small">Account Type</label>
                <select 
                  className="form-select form-control-custom"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="user">Passenger</option>
                  <option value="driver">Driver</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary-custom w-100 mb-3" disabled={isLoading}>
                {isLoading ? (
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                ) : null}
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
            
            <p className="text-center mt-3 mb-0 text-muted-custom">
              Don't have an account? <Link to="/register" className="text-primary-custom text-decoration-none fw-bold">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
