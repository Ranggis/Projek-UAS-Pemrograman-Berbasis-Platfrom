const express = require('express');
const { getBookings, createBooking, getBookingById, updateBookingById, deleteBookingById} = require('../Controllers/bookingController');
const { authenticateToken } = require('../Middlewares/authMiddleware');
const router = express.Router();

// Mendapatkan semua pemesanan
router.get('/', getBookings, getBookings);

// Membuat pemesanan baru
router.post('/', authenticateToken, createBooking);

// Mendapatkan pemesanan berdasarkan ID
router.get('/:id', authenticateToken, getBookingById);

// Memperbarui pemesanan berdasarkan ID
router.put('/:id', authenticateToken, updateBookingById);

// Menghapus pemesanan berdasarkan ID
router.delete('/:id', authenticateToken, deleteBookingById);
module.exports = router;