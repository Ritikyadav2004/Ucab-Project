import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Navigation, Car, CreditCard, ArrowLeft, Loader2 } from 'lucide-react';

export default function BookRide() {
  const [step, setStep] = useState(1);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCab, setSelectedCab] = useState('mini');
  const [showQR, setShowQR] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsSearching(false);
      setStep(2);
    }, 1500);
  };

  const handleConfirm = () => {
    setShowQR(true);
  };

  const handlePaymentDone = () => {
    navigate('/track/123');
  };

  return (
    <div className="container-fluid p-0 fade-in">
      <div className="row g-0" style={{ height: 'calc(100vh - 76px)' }}>
        
        {/* Left Panel - Booking Form */}
        <div className="col-md-5 col-lg-4 bg-white shadow-lg z-1 d-flex flex-column border-end position-relative">
          <div className="p-4 p-lg-5 flex-grow-1 overflow-auto">
            
            {step === 1 && (
              <div className="fade-in">
                <h3 className="fw-bold font-poppins text-primary-custom mb-2">Where to?</h3>
                <p className="text-muted-custom mb-4">Enter your locations to find a ride.</p>
                
                <div className="d-flex flex-column gap-3 position-relative">
                  {/* Connecting Line */}
                  <div className="position-absolute bg-light" style={{ width: '2px', height: '40px', left: '24px', top: '35px', zIndex: 0 }}></div>
                  
                  <div className="position-relative z-1">
                    <div className="position-absolute top-50 start-0 translate-middle-y ms-3 bg-white rounded-circle">
                      <div className="bg-secondary-custom rounded-circle" style={{ width: '10px', height: '10px', margin: '5px' }}></div>
                    </div>
                    <input 
                      type="text" 
                      className="form-control form-control-custom ps-5 py-3 shadow-sm" 
                      placeholder="Pickup location"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                    />
                  </div>
                  
                  <div className="position-relative z-1">
                    <div className="position-absolute top-50 start-0 translate-middle-y ms-3 bg-white rounded-circle">
                      <div className="bg-primary-custom rounded-circle" style={{ width: '10px', height: '10px', margin: '5px' }}></div>
                    </div>
                    <input 
                      type="text" 
                      className="form-control form-control-custom ps-5 py-3 shadow-sm" 
                      placeholder="Drop-off location"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                    />
                  </div>
                  
                  <button 
                    className="btn btn-primary-custom btn-lg w-100 mt-4 d-flex justify-content-center align-items-center gap-2"
                    disabled={!pickup || !dropoff || isSearching}
                    onClick={handleSearch}
                  >
                    {isSearching ? (
                      <><Loader2 className="spinner-border spinner-border-sm" size={20} /> Searching Cabs...</>
                    ) : (
                      'Find Available Rides'
                    )}
                  </button>
                </div>
              </div>
            )}

            {step === 2 && !showQR && (
              <div className="fade-in d-flex flex-column h-100">
                <button className="btn btn-link text-muted-custom text-decoration-none p-0 mb-4 d-flex align-items-center gap-2" onClick={() => setStep(1)}>
                  <ArrowLeft size={18} /> Back to locations
                </button>
                
                {/* Route Summary */}
                <div className="bg-light p-3 rounded-4 mb-4 border">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="bg-secondary-custom rounded-circle flex-shrink-0" style={{width: '12px', height: '12px'}}></div>
                    <div className="text-truncate">
                      <small className="text-muted-custom d-block" style={{fontSize: '0.7rem'}}>PICKUP</small>
                      <span className="fw-medium text-primary-custom">{pickup}</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary-custom rounded-circle flex-shrink-0" style={{width: '12px', height: '12px'}}></div>
                    <div className="text-truncate">
                      <small className="text-muted-custom d-block" style={{fontSize: '0.7rem'}}>DROP-OFF</small>
                      <span className="fw-medium text-primary-custom">{dropoff}</span>
                    </div>
                  </div>
                </div>

                <h5 className="fw-bold font-poppins text-primary-custom mb-3">Choose a Ride</h5>
                
                {/* Cab Options */}
                <div className="d-flex flex-column gap-3 flex-grow-1 overflow-auto pb-4">
                  <RideOption 
                    id="mini"
                    type="UCab Mini" 
                    time="3 mins" 
                    price="₹125" 
                    desc="Affordable, compact rides"
                    selected={selectedCab === 'mini'} 
                    onClick={() => setSelectedCab('mini')}
                  />
                  <RideOption 
                    id="sedan"
                    type="UCab Sedan" 
                    time="5 mins" 
                    price="₹180" 
                    desc="Comfortable sedans, top quality"
                    selected={selectedCab === 'sedan'} 
                    onClick={() => setSelectedCab('sedan')}
                  />
                  <RideOption 
                    id="suv"
                    type="UCab SUV" 
                    time="8 mins" 
                    price="₹255" 
                    desc="More space for groups"
                    selected={selectedCab === 'suv'} 
                    onClick={() => setSelectedCab('suv')}
                  />
                </div>

                {/* Payment & Confirm */}
                <div className="mt-auto pt-3 bg-white border-top">
                  <div className="d-flex justify-content-between align-items-center mb-3 px-2">
                    <div className="d-flex align-items-center gap-2 text-muted-custom">
                      <CreditCard size={20} className="text-primary-custom" />
                      <span className="fw-medium">Personal •••• 4242</span>
                    </div>
                    <button className="btn btn-link btn-sm text-secondary-custom text-decoration-none fw-bold p-0">Change</button>
                  </div>
                  <button 
                    className="btn btn-primary-custom btn-lg w-100 d-flex justify-content-between align-items-center shadow-lg"
                    onClick={handleConfirm}
                  >
                    <span>Confirm {selectedCab === 'mini' ? 'Mini' : selectedCab === 'sedan' ? 'Sedan' : 'SUV'}</span>
                    <span className="bg-white text-primary-custom px-2 py-1 rounded fw-bold fs-6">
                      {selectedCab === 'mini' ? '₹125' : selectedCab === 'sedan' ? '₹180' : '₹255'}
                    </span>
                  </button>
                </div>
              </div>
            )}

            {showQR && (
              <div className="fade-in d-flex flex-column h-100 align-items-center justify-content-center text-center py-4">
                <h4 className="fw-bold text-primary-custom mb-3">Scan to Pay</h4>
                <div className="bg-light p-3 rounded-4 shadow-sm mb-4 border d-inline-block">
                  <img src="/qrcode.png" alt="Payment QR Code" className="img-fluid rounded" style={{ maxWidth: '200px', width: '100%', aspectRatio: '1/1', objectFit: 'contain' }} />
                </div>
                <h2 className="fw-bold text-success-custom mb-4">
                  {selectedCab === 'mini' ? '₹125' : selectedCab === 'sedan' ? '₹180' : '₹255'}
                </h2>
                <p className="text-muted-custom mb-4 px-3">Please scan the QR code with any UPI app (GPay, PhonePe, Paytm) to complete your payment.</p>
                <div className="mt-auto w-100">
                  <button 
                    className="btn btn-primary-custom btn-lg w-100 shadow-lg mb-3"
                    onClick={handlePaymentDone}
                  >
                    Payment Completed
                  </button>
                  <button 
                    className="btn btn-link text-muted-custom text-decoration-none fw-medium"
                    onClick={() => setShowQR(false)}
                  >
                    Cancel Payment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Right Panel - Map */}
        <div className="col-md-7 col-lg-8 map-container">
          <div className="map-overlay d-flex align-items-center justify-content-center">
            <div className="text-center bg-white p-4 rounded-4 shadow-sm">
              <MapPin size={48} className="text-primary-custom mb-3 mx-auto" />
              <h5 className="font-poppins text-primary-custom fw-bold">Interactive Map View</h5>
              <p className="text-muted-custom mb-0">Google Maps Integration Required</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function RideOption({ id, type, time, price, desc, selected, onClick }) {
  return (
    <div 
      className={`card card-custom cursor-pointer ${selected ? 'card-selected' : ''}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="card-body p-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <div className={`p-2 rounded-circle ${selected ? 'bg-primary-custom text-white' : 'bg-light text-primary-custom'}`}>
              <Car size={28} />
            </div>
            <div>
              <h6 className="mb-0 fw-bold text-primary-custom">{type}</h6>
              <div className="d-flex align-items-center gap-2">
                <small className="text-secondary-custom fw-medium">{time} away</small>
                <span className="text-muted-custom" style={{fontSize: '10px'}}>•</span>
                <small className="text-muted-custom" style={{fontSize: '0.75rem'}}>{desc}</small>
              </div>
            </div>
          </div>
          <span className="fw-bold fs-5 text-primary-custom">{price}</span>
        </div>
      </div>
    </div>
  );
}
