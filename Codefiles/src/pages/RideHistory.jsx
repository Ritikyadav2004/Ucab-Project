import { MapPin, Calendar, CreditCard, ChevronRight } from 'lucide-react';

export default function RideHistory() {
  return (
    <div className="container py-5 fade-in">
      <div className="mb-5">
        <h2 className="fw-bold font-poppins text-primary-custom mb-2">Ride History</h2>
        <p className="text-muted-custom">Review your past trips and receipts.</p>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="d-flex flex-column gap-4">
            
            {/* History Item 1 */}
            <div className="card card-custom card-hover p-4">
              <div className="row align-items-center">
                <div className="col-md-8 mb-3 mb-md-0">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="bg-light p-3 rounded-circle text-primary-custom">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold text-primary-custom mb-1">Downtown to Airport</h5>
                      <div className="d-flex align-items-center gap-3 text-muted-custom small">
                        <span className="d-flex align-items-center gap-1"><Calendar size={14} /> Oct 24, 2023 • 10:30 AM</span>
                        <span className="d-flex align-items-center gap-1"><CreditCard size={14} /> Card •••• 4242</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted-custom small ms-5 ps-2">
                    <span className="badge bg-light text-dark border">UCab Sedan</span>
                    <span>•</span>
                    <span>Driver: Mohan Singh</span>
                  </div>
                </div>
                <div className="col-md-4 text-md-end">
                  <h4 className="fw-bold text-primary-custom mb-2">₹245</h4>
                  <span className="badge bg-success-custom bg-opacity-10 text-success-custom rounded-pill px-3 py-2 mb-2">Completed</span>
                  <div className="mt-2">
                    <button className="btn btn-link text-primary-custom text-decoration-none p-0 fw-medium d-flex align-items-center justify-content-md-end gap-1 w-100">
                      View Receipt <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* History Item 2 */}
            <div className="card card-custom card-hover p-4">
              <div className="row align-items-center">
                <div className="col-md-8 mb-3 mb-md-0">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="bg-light p-3 rounded-circle text-primary-custom">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold text-primary-custom mb-1">Office to Home</h5>
                      <div className="d-flex align-items-center gap-3 text-muted-custom small">
                        <span className="d-flex align-items-center gap-1"><Calendar size={14} /> Oct 23, 2023 • 6:15 PM</span>
                        <span className="d-flex align-items-center gap-1"><CreditCard size={14} /> Wallet</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted-custom small ms-5 ps-2">
                    <span className="badge bg-light text-dark border">UCab Mini</span>
                    <span>•</span>
                    <span>Driver: Priya Patel</span>
                  </div>
                </div>
                <div className="col-md-4 text-md-end">
                  <h4 className="fw-bold text-primary-custom mb-2">₹150</h4>
                  <span className="badge bg-success-custom bg-opacity-10 text-success-custom rounded-pill px-3 py-2 mb-2">Completed</span>
                  <div className="mt-2">
                    <button className="btn btn-link text-primary-custom text-decoration-none p-0 fw-medium d-flex align-items-center justify-content-md-end gap-1 w-100">
                      View Receipt <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* History Item 3 (Cancelled) */}
            <div className="card card-custom card-hover p-4 opacity-75">
              <div className="row align-items-center">
                <div className="col-md-8 mb-3 mb-md-0">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="bg-light p-3 rounded-circle text-muted-custom">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold text-muted-custom mb-1">Mall to Home</h5>
                      <div className="d-flex align-items-center gap-3 text-muted-custom small">
                        <span className="d-flex align-items-center gap-1"><Calendar size={14} /> Oct 20, 2023 • 2:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-md-end">
                  <h4 className="fw-bold text-muted-custom mb-2">₹0</h4>
                  <span className="badge bg-error-custom bg-opacity-10 text-error-custom rounded-pill px-3 py-2">Cancelled</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Sidebar */}
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="card card-custom p-4 bg-primary-custom text-white">
            <h5 className="fw-bold font-poppins mb-3">Need Help?</h5>
            <p className="small opacity-75 mb-4">Having issues with a recent ride or payment? Our support team is here to help 24/7.</p>
            <button className="btn btn-light text-primary-custom fw-bold w-100">Contact Support</button>
          </div>
        </div>
      </div>
    </div>
  );
}
