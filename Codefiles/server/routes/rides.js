import express from 'express';
import { Ride } from '../models/Ride.js';
import { Driver } from '../models/Driver.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/request', authenticateToken, async (req, res) => {
  try {
    const { pickupLocation, dropLocation, pickupCoordinates, dropCoordinates, fare } = req.body;
    
    const ride = new Ride({
      userId: req.user.id,
      pickupLocation,
      dropLocation,
      pickupCoordinates,
      dropCoordinates,
      fare,
      rideStatus: 'requested'
    });

    await ride.save();

    const nearestDrivers = await Driver.find({ availability: true }).limit(5);

    res.status(201).json({ message: 'Ride requested', ride, nearestDrivers });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.get('/history', authenticateToken, async (req, res) => {
  try {
    const rides = await Ride.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(rides);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.patch('/:id/status', authenticateToken, async (req, res) => {
  try {
    const { status } = req.body;
    const ride = await Ride.findByIdAndUpdate(req.params.id, { 
      rideStatus: status,
      ...(status === 'accepted' ? { driverId: req.user.id } : {}),
      ...(status === 'ongoing' ? { startTime: new Date() } : {}),
      ...(status === 'completed' ? { endTime: new Date() } : {})
    }, { new: true });
    
    if (!ride) return res.status(404).json({ message: 'Ride not found' });
    
    res.json(ride);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
