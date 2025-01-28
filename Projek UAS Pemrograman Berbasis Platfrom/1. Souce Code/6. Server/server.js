const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('../Routes/auth');
const hotelRoutes = require('../Routes/hotel');
const roomRoutes = require('../Routes/room');
const userRoutes = require('../Routes/user');
const bookingRoutes = require('../Routes/booking');

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/hotels', hotelRoutes);
app.use('/rooms', roomRoutes);
app.use('/users', userRoutes);
app.use('/bookings', bookingRoutes);

// Root Endpoint
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Hotel Management API!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Tambahkan rute contoh untuk POST di root
app.post('/', (req, res) => {
  res.send('Hello, Kamu udah tersambung ke server');
});