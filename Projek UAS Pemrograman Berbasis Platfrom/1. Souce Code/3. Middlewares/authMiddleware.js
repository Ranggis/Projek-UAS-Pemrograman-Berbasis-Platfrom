const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authenticateToken = (req, res, next) => {
  // Pastikan JWT_SECRET terdefinisi
  if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET is not defined in environment variables');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  // Ambil token dari header Authorization
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    console.warn('No token provided');
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  // Verifikasi token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error('JWT verification failed:', err.message);
      return res.status(403).json({ message: 'Invalid token', error: err.message });
    }

    // Simpan user ke request
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };