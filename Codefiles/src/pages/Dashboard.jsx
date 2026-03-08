import { useAuth } from '../context/AuthContext.jsx';
import { MapPin, Clock, CreditCard, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="container py-5 fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold font-poppins text-primary-custom mb-1">Welcome, {user?.name || 'User'}!</h2>
          <p className="text-muted-custom">Here is an overview of your activity.</p>
        </div>
        {user?.role === 'user' && (
          <Link to="/book" className="btn btn-primary-custom d-none d-md-inline-flex align-items-center gap-2">
            <MapPin size={18} /> Book New Ride
          </Link>
        )}
      </div>

      {/* Stats Row */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card card-custom card-hover p-4 border-start border-4 border-primary">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-muted-custom fw-medium mb-1">Total Rides</h6>
                <h2 className="fw-bold text-primary-custom mb-0">12</h2>
              </div>
              <div className="bg-primary-custom bg-opacity-10 p-3 rounded-circle text-primary-custom">
                <MapPin size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-custom card-hover p-4 border-start border-4 border-warning">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-muted-custom fw-medium mb-1">Upcoming Rides</h6>
                <h2 className="fw-bold text-secondary-custom mb-0">1</h2>
              </div>
              <div className="bg-secondary-custom bg-opacity-10 p-3 rounded-circle text-secondary-custom">
                <Clock size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-custom card-hover p-4 border-start border-4 border-success">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-muted-custom fw-medium mb-1">Total Spent</h6>
                <h2 className="fw-bold text-success-custom mb-0">₹1,450</h2>
              </div>
              <div className="bg-success-custom bg-opacity-10 p-3 rounded-circle text-success-custom">
                <CreditCard size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <h4 className="fw-bold font-poppins text-primary-custom mb-4">Recent Activity</h4>
      <div className="card card-custom overflow-hidden">
        <div className="list-group list-group-flush">
          <div className="list-group-item p-4 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-light p-3 rounded-circle text-primary-custom">
                <MapPin size={20} />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Downtown to Airport</h6>
                <small className="text-muted-custom">Oct 24, 2023 • 10:30 AM</small>
              </div>
            </div>
            <div className="text-end d-flex align-items-center gap-3">
              <div>
                <h6 className="fw-bold mb-1">₹245</h6>
                <span className="badge bg-success-custom bg-opacity-10 text-success-custom rounded-pill">Completed</span>
              </div>
              <ChevronRight size={20} className="text-muted-custom" />
            </div>
          </div>
          
          <div className="list-group-item p-4 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-light p-3 rounded-circle text-primary-custom">
                <MapPin size={20} />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Office to Home</h6>
                <small className="text-muted-custom">Oct 23, 2023 • 6:15 PM</small>
              </div>
            </div>
            <div className="text-end d-flex align-items-center gap-3">
              <div>
                <h6 className="fw-bold mb-1">₹150</h6>
                <span className="badge bg-success-custom bg-opacity-10 text-success-custom rounded-pill">Completed</span>
              </div>
              <ChevronRight size={20} className="text-muted-custom" />
            </div>
          </div>
        </div>
        <div className="card-footer bg-white text-center p-3 border-top">
          <Link to="/history" className="text-primary-custom text-decoration-none fw-medium">View All History</Link>
        </div>
      </div>
    </div>
  );
}
