import express from 'express';
import { createServer as createViteServer } from 'vite';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

import authRoutes from './server/routes/auth.js';
import ridesRoutes from './server/routes/rides.js';

dotenv.config();

async function startServer() {
  const app = express();
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ucab';
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('join_ride', (rideId) => {
      socket.join(rideId);
      console.log(`User joined ride room: ${rideId}`);
    });

    socket.on('update_location', (data) => {
      io.to(data.rideId).emit('location_updated', data.location);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  app.use('/api/auth', authRoutes);
  app.use('/api/rides', ridesRoutes);
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'UCab API is running' });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
