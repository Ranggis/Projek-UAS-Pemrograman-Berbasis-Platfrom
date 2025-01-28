const db = require('../Config/db');

// Mendapatkan semua pemesanan
exports.getBookings = async (req, res) => {
  try {
    const [bookings] = await db.query('SELECT * FROM bookings');
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Membuat pemesanan baru
exports.createBooking = async (req, res) => {
  const { user_id, room_id, start_date, end_date, status } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO Bookings (user_id, room_id, start_date, end_date, status) VALUES (?, ?, ?, ?, ?)',
      [user_id, room_id, start_date, end_date, status]
    );
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mendapatkan pemesanan berdasarkan ID
exports.getBookingById = async (req, res) => {
  const { id } = req.params;

  try {
    const [booking] = await db.query('SELECT * FROM Bookings WHERE id = ?', [id]);
    if (booking.length === 0) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Memperbarui pemesanan berdasarkan ID
exports.updateBookingById = async (req, res) => {
  const { id } = req.params;
  const { start_date, end_date, status } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE Bookings SET start_date = ?, end_date = ?, status = ? WHERE id = ?',
      [start_date, end_date, status, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Booking not found or no changes made' });
    }
    res.status(200).json({ message: 'Booking updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Menghapus pemesanan berdasarkan ID
exports.deleteBookingById = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query('DELETE FROM Bookings WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};