const db = require('../Config/db');

// Mendapatkan semua hotel
exports.getHotels = async (req, res) => {
  try {
    const [hotels] = await db.query('SELECT * FROM Hotels');
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mendapatkan hotel berdasarkan ID
exports.getHotelById = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query('SELECT * FROM Hotels WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Membuat hotel baru
exports.createHotel = async (req, res) => {
  const { name, location, rating } = req.body;

  if (!name || !location || !rating) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO Hotels (name, location, rating) VALUES (?, ?, ?)',
      [name, location, rating]
    );
    res.status(201).json({ message: 'Hotel created successfully', hotelId: result.insertId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mengupdate data hotel berdasarkan ID
exports.updateHotel = async (req, res) => {
  const { id } = req.params;
  const { name, location, rating } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE Hotels SET name = ?, location = ?, rating = ? WHERE id = ?',
      [name, location, rating, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.status(200).json({ message: 'Hotel updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Menghapus hotel berdasarkan ID
exports.deleteHotel = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query('DELETE FROM Hotels WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.status(200).json({ message: 'Hotel deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
