import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { Driver } from '../models/Driver.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone, role, vehicleType, vehicleNumber } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);

    if (role === 'driver') {
      const existingDriver = await Driver.findOne({ email });
      if (existingDriver) return res.status(400).json({ message: 'Driver already exists' });

      const driver = new Driver({
        name, email, password: hashedPassword, phone, vehicleType, vehicleNumber
      });
      await driver.save();
      return res.status(201).json({ message: 'Driver registered successfully' });
    } else {
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: 'User already exists' });

      const user = new User({
        name, email, password: hashedPassword, phone
      });
      await user.save();
      return res.status(201).json({ message: 'User registered successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    
    let user;
    if (role === 'driver') {
      user = await Driver.findOne({ email });
    } else {
      user = await User.findOne({ email });
    }

    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, role: role || 'user' }, 
      process.env.JWT_SECRET || 'fallback_secret', 
      { expiresIn: '1d' }
    );

    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: role || 'user' } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
