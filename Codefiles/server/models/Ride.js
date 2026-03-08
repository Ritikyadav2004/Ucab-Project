import mongoose from 'mongoose';

const rideSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
  pickupLocation: { type: String, required: true },
  dropLocation: { type: String, required: true },
  pickupCoordinates: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true }
  },
  dropCoordinates: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true }
  },
  fare: { type: Number, required: true },
  rideStatus: { type: String, enum: ['requested', 'accepted', 'ongoing', 'completed', 'cancelled'], default: 'requested' },
  startTime: { type: Date },
  endTime: { type: Date },
}, { timestamps: true });

export const Ride = mongoose.model('Ride', rideSchema);
