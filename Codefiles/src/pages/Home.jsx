import { Link } from 'react-router-dom';
import { MapPin, Clock, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-white py-5 py-lg-6 position-relative overflow-hidden">
        <div className="container py-5">
          <div className="row align-items-center min-vh-50 g-5">
            <div className="col-lg-6 z-1">
              <span className="badge bg-secondary-custom text-white px-3 py-2 rounded-pill mb-3 fw-medium">
                #1 Ride Sharing App
              </span>
              <h1 className="display-4 fw-bold text-primary-custom mb-4 lh-sm font-poppins">
                Go anywhere with <br/>
                <span className="text-secondary-custom">UCab</span> seamlessly.
              </h1>
              <p className="lead text-muted-custom mb-5 pe-lg-5">
                Request a ride, hop in, and go. UCab offers the most reliable, safe, and affordable rides in your city.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link to="/book" className="btn btn-primary-custom btn-lg d-inline-flex align-items-center justify-content-center gap-2">
                  <MapPin size={20} /> Book a Ride Now
                </Link>
                <Link to="/register" className="btn btn-outline-primary-custom btn-lg d-inline-flex align-items-center justify-content-center gap-2">
                  Become a Driver <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 bg-primary-custom rounded-circle opacity-10 blur-3xl" style={{ filter: 'blur(60px)' }}></div>
              <div className="position-relative rounded-4 overflow-hidden shadow-lg card-hover" style={{ height: '450px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Cityscape" 
                  className="w-100 h-100 object-fit-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5 pb-3">
            <h2 className="fw-bold font-poppins text-primary-custom mb-3">Why choose UCab?</h2>
            <p className="text-muted-custom fs-5">Experience the best ride-sharing service tailored for you.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <FeatureCard 
                icon={<ShieldCheck size={32} className="text-primary-custom" />}
                title="Secure & Reliable"
                description="All our drivers undergo strict background checks. Rides are tracked in real-time for your ultimate safety."
              />
            </div>
            <div className="col-md-4">
              <FeatureCard 
                icon={<Clock size={32} className="text-secondary-custom" />}
                title="Lightning Fast"
                description="Our smart allocation algorithm finds the nearest available driver instantly, minimizing your wait time."
              />
            </div>
            <div className="col-md-4">
              <FeatureCard 
                icon={<CreditCard size={32} className="text-success-custom" />}
                title="Seamless Payments"
                description="Pay effortlessly with saved cards, digital wallets, or cash. Enjoy transparent pricing with no hidden fees."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="card card-custom card-hover h-100 p-4 p-lg-5 text-center">
      <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
        {icon}
      </div>
      <h4 className="fw-bold font-poppins mb-3 text-primary-custom">{title}</h4>
      <p className="text-muted-custom mb-0 lh-base">{description}</p>
    </div>
  );
}
