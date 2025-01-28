const express = require('express');
const { getHotels, createHotel, getHotelById, updateHotel, deleteHotel} = require('../Controllers/hotelController');
const { authenticateToken } = require('../Middlewares/authMiddleware');
const router = express.Router();

// Mendapatkan semua hotel
router.get('/', getHotels);

// Membuat hotel baru
router.post('/', authenticateToken, createHotel);

// Mendapatkan hotel berdasarkan ID
router.get('/:id', authenticateToken, getHotelById);

// Mengupdate data hotel berdasarkan ID
router.put('/:id', authenticateToken, updateHotel);

// Menghapus hotel berdasarkan ID
router.delete('/:id', authenticateToken, deleteHotel);

module.exports = router;