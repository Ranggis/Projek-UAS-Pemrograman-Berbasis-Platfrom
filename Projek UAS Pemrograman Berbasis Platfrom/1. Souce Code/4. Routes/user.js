const express = require('express');
const { getUsers, updateUserRole, getUserById, updateUserRoleById, createusers, updateusers, deleteUser} = require('../Controllers/userController'); // Pastikan nama fungsi sesuai di controller
const { authenticateToken } = require('../Middlewares/authMiddleware'); // Pastikan middleware diimpor dengan benar
const router = express.Router();

// Mendapatkan semua pengguna 
router.get('/', getUsers);

// Memperbarui role pengguna (dengan otentikasi)
router.put('/role', authenticateToken, updateUserRole);

// Mendapatkan pengguna berdasarkan ID
router.get('/:id', authenticateToken, getUserById);

// Memperbarui peran pengguna berdasarkan ID
router.put('/:id/role', authenticateToken, updateUserRoleById);

// Membuat pengguna baru
router.post('/', authenticateToken, createusers);

// Mengupdate data pengguna berdasarkan ID
router.put('/:id', authenticateToken, updateusers);

// Menghapus Pengguna berdasarkan ID
router.delete('/:id', authenticateToken, deleteUser);

module.exports = router;