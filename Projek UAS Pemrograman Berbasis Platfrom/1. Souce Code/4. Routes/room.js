const express = require('express');
const { getRooms, createRoom, getRoomById, updateRoomById, deleteroom} = require('../Controllers/roomController');
const { authenticateToken } = require('../Middlewares/authMiddleware');
const router = express.Router();

// Mendapatkan semua kamar
router.get('/', getRooms);

// Membuat sebuah kamar
router.post('/', authenticateToken, createRoom);

// Mendapatkan kamar berdasarkan ID
router.get('/:id', authenticateToken, getRoomById);

// Memperbarui kamar berdasarkan ID
router.put('/:id', authenticateToken, updateRoomById);

// Menghapus Pengguna berdasarkan ID
router.delete('/:id', authenticateToken, deleteroom);

module.exports = router;