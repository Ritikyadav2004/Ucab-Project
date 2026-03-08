<div align="center">
  <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="UCab Banner" width="100%" style="border-radius: 15px; margin-bottom: 20px;" />

  <h1>🚕 UCab - Modern Ride-Sharing Platform</h1>
  <p><strong>A Full-Stack MERN Application for Seamless, Zero-Commission Ride Hailing</strong></p>

  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#architecture">Architecture</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#screenshots">Screenshots</a>
  </p>
</div>

---

## 📖 About The Project

**UCab** is a comprehensive, full-stack ride-sharing web application built to demonstrate a scalable Minimum Viable Product (MVP) for the ride-hailing industry. 

Unlike traditional platforms that rely heavily on expensive proprietary APIs and charge massive commissions (25-30%), UCab is designed with a **Zero-Commission approach**. It utilizes open-source mapping tools and a direct Peer-to-Peer (P2P) UPI QR-code payment interface, ensuring cheaper rides for passengers and higher take-home pay for drivers.

---

## ✨ Key Features

- **🔐 Secure Authentication:** Role-based login/registration (Rider & Driver) protected by JSON Web Tokens (JWT) and Bcrypt.js password hashing.
- **🗺️ Open-Source Mapping:** Integrated with **Leaflet.js** for cost-effective, interactive map rendering.
- **🚗 Dynamic Ride Booking:** Select between multiple cab types (Mini, Sedan, SUV) with pre-calculated, transparent pricing.
- **💸 Zero-Commission Payments:** A direct static UPI QR-code interface allowing riders to pay drivers directly, bypassing gateway fees.
- **📡 Real-Time Infrastructure:** Backend powered by **Socket.io** (WebSockets) to handle live location updates and ride tracking.
- **📊 User Dashboard:** View recent activity, track total expenditure, and monitor ride history (Completed/Cancelled).
- **📱 Responsive UI:** A mobile-first, highly intuitive interface built with React, Vite, and Bootstrap.

---

## 🛠️ Tech Stack

**Client-Side (Frontend)**
- **React.js** (UI Library)
- **Vite** (Next Generation Frontend Tooling)
- **Bootstrap 5 & Custom CSS** (Styling)
- **Leaflet.js** (Interactive Maps)
- **Lucide React** (Icons)

**Server-Side (Backend)**
- **Node.js** (Runtime Environment)
- **Express.js** (REST API Framework)
- **Socket.io** (Real-Time WebSockets)
- **JWT & Bcrypt.js** (Security & Auth)

**Database**
- **MongoDB** (NoSQL Database)
- **Mongoose** (Object Data Modeling)

---

## 🏗️ System Architecture

UCab follows a standard 3-tier Client-Server model:
1. **Presentation Layer:** React SPA handling UI, Leaflet maps, and Socket.io-client.
2. **Application Layer:** Express.js REST API handling business logic (Auth, Booking) and a Socket.io server handling real-time WebSocket connections (`join_ride`, `update_location`).
3. **Data Layer:** MongoDB storing Users, Drivers, and Ride History documents.

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local instance or Atlas URI)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ritikyadav2004/Ucab-Project.git
   cd ucab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGODB_URI=mongodb://localhost:27017/ucab
   # Or use your MongoDB Atlas connection string
   
   JWT_SECRET=your_super_secret_jwt_key
   ```

4. **Add Payment QR Code**
   Place your UPI QR code image named `qrcode.png` inside the `public/` folder.

5. **Start the Development Server**
   ```bash
   npm run dev
   ```
   *This single command starts both the Express backend and the Vite frontend middleware on `http://localhost:3000`.*

---

---

## 🔮 Future Scope

- **Automated Payment Verification:** Integrating Razorpay/Stripe webhooks to automatically verify QR transactions.
- **Geospatial Matching:** Implementing MongoDB `2dsphere` indexes to match riders with the exact nearest driver based on live GPS coordinates.
- **Push Notifications:** Adding Firebase Cloud Messaging (FCM) for background alerts.

---

<div align="center">
  <p>Built with ❤️ for a better ride-sharing experience.</p>
</div>
