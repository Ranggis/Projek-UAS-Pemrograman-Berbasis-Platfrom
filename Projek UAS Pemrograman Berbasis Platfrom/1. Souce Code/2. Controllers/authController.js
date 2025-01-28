const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../Config/db');
const dotenv = require('dotenv');

dotenv.config();

exports.register = async (req, res) => {
  const { id, name, email, password } = req.body;

  // Validasi input
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Cek duplikasi email
    const [existingUser] = await db.query('SELECT * FROM Users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru ke database
    const [result] = await db.query(
      'INSERT INTO Users (id, name, email, password, role) VALUES (?, ?, ?, ?, ?)',
      [id, name, email, hashedPassword, 'user']
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Validasi input
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Cari user berdasarkan email
    const [rows] = await db.query('SELECT * FROM Users WHERE email = ?', [email]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = rows[0];

    // Cek password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Buat token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: { id: user.id, name: user.name, email: user.email, password: user.password, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};