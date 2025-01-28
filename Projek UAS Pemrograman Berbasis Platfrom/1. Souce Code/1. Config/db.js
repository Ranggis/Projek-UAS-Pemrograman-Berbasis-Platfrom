const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createPool({
  host: 'localhost', // Host MySQL Anda
  user: 'root',      // User default MySQL XAMPP
  password: '',      // Password default (kosong untuk XAMPP)
  database: 'hotel_management', // Nama database yang Anda buat
});

db.getConnection((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db.promise();