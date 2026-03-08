import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  vehicleType: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  currentLocation: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] }
  },
  availability: { type: Boolean, default: true },
  verificationStatus: { type: String, enum: ['pending', 'verified', 'rejected'], default: 'pending' },
}, { timestamps: true });

driverSchema.index({ currentLocation: '2dsphere' });

export const Driver = mongoose.model('Driver', driverSchema);
