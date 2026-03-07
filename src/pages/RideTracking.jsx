import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSocket } from '../context/SocketContext.jsx';
import { Phone, MessageSquare, ShieldAlert, X, MapPin, Star } from 'lucide-react';

export default function RideTracking() {
  const { rideId } = useParams();
  const { socket } = useSocket();
  const [driverLocation, setDriverLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (socket && rideId) {
      socket.emit('join_ride', rideId);
      socket.on('location_updated', (location) => {
        setDriverLocation(location);
      });
    }
    return () => {
      if (socket) socket.off('location_updated');
    };
  }, [socket, rideId]);

  return (
    <div className="container-fluid p-0 fade-in">
      <div className="row g-0" style={{ height: 'calc(100vh - 76px)' }}>
        
        {/* Left Panel - Tracking Info */}
        <div className="col-md-5 col-lg-4 bg-white shadow-lg z-1 d-flex flex-column border-end">
          <div className="p-4 p-lg-5 flex-grow-1 overflow-auto">
            
            {/* Status Header */}
            <div className="text-center mb-4">
              <div className="d-inline-flex align-items-center gap-2 bg-success-custom bg-opacity-10 text-success-custom px-4 py-2 rounded-pill mb-3 badge-pulse">
                <div className="bg-success-custom rounded-circle" style={{width: '8px', height: '8px'}}></div>
                <span className="fw-bold">Driver is on the way</span>
              </div>
              <h2 className="fw-bold font-poppins text-primary-custom mb-1">Arriving in 3 mins</h2>
              <p className="text-muted-custom">Your driver is completing a nearby drop-off.</p>
            </div>

            {/* Driver Card */}
            <div className="card card-custom border bg-light p-4 mb-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="position-relative">
                  <img src="https://picsum.photos/seed/driver/100/100" alt="Driver" className="rounded-circle border border-3 border-white shadow-sm" width="60" height="60" referrerPolicy="no-referrer" />
                  <div className="position-absolute bottom-0 end-0 bg-success-custom rounded-circle border border-2 border-white" style={{width: '14px', height: '14px'}}></div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-0 fw-bold text-primary-custom">Mohan Singh</h5>
                  <div className="d-flex align-items-center gap-1 text-secondary-custom">
                    <Star size={14} fill="currentColor" />
                    <small className="fw-bold">4.9</small>
                    <small className="text-muted-custom ms-1">(1,240 rides)</small>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3 p-3 d-flex justify-content-between align-items-center shadow-sm">
                <div>
                  <h5 className="mb-0 fw-bold text-primary-custom">ABC 1234</h5>
                  <small className="text-muted-custom">White Toyota Camry</small>
                </div>
                <div className="text-end">
                  <span className="badge bg-primary-custom bg-opacity-10 text-primary-custom">UCab Sedan</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-2 mb-4">
              <button className="btn btn-primary-custom flex-grow-1 d-flex justify-content-center align-items-center gap-2">
                <Phone size={18} /> Call
              </button>
              <button className="btn btn-outline-primary-custom flex-grow-1 d-flex justify-content-center align-items-center gap-2">
                <MessageSquare size={18} /> Message
              </button>
            </div>

            <hr className="text-muted my-4" />

            {/* Trip Details */}
            <h6 className="fw-bold font-poppins text-primary-custom mb-3">Trip Details</h6>
            <div className="d-flex flex-column gap-3 mb-4">
              <div className="d-flex align-items-start gap-3">
                <div className="bg-secondary-custom rounded-circle mt-1" style={{width: '10px', height: '10px'}}></div>
                <div>
                  <small className="text-muted-custom d-block">PICKUP</small>
                  <span className="fw-medium text-primary-custom">123 Main Street, Downtown</span>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary-custom rounded-circle mt-1" style={{width: '10px', height: '10px'}}></div>
                <div>
                  <small className="text-muted-custom d-block">DROP-OFF</small>
                  <span className="fw-medium text-primary-custom">International Airport, Terminal 1</span>
                </div>
              </div>
            </div>

            {/* Safety & Cancel */}
            <div className="d-flex flex-column gap-2 mt-auto">
              <button className="btn btn-light text-primary-custom fw-medium d-flex align-items-center justify-content-center gap-2 py-3 rounded-3">
                <ShieldAlert size={18} /> Share Trip Status
              </button>
              <button 
                className="btn btn-link text-error-custom text-decoration-none fw-medium d-flex align-items-center justify-content-center gap-2"
                onClick={() => navigate('/dashboard')}
              >
                <X size={18} /> Cancel Ride
              </button>
            </div>

          </div>
        </div>
        
        {/* Right Panel - Map */}
        <div className="col-md-7 col-lg-8 map-container">
          <div className="map-overlay d-flex flex-column align-items-center justify-content-center">
            <div className="text-center bg-white p-4 rounded-4 shadow-sm mb-3">
              <MapPin size={48} className="text-primary-custom mb-3 mx-auto" />
              <h5 className="font-poppins text-primary-custom fw-bold">Live Tracking Map</h5>
              <p className="text-muted-custom mb-0">Google Maps Integration Required</p>
            </div>
            
            {driverLocation && (
              <div className="bg-primary-custom text-white px-4 py-2 rounded-pill shadow-lg fade-in">
                <small className="fw-medium">
                  Live Coordinates: {driverLocation.lat.toFixed(4)}, {driverLocation.lng.toFixed(4)}
                </small>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
