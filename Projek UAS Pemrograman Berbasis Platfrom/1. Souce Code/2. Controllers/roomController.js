const db = require('../Config/db');

// Mendapatkan semua kamar
exports.getRooms = async (req, res) => {
  try {
    const [rooms] = await db.query('SELECT * FROM Rooms');
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Membuat kamar
exports.createRoom = async (req, res) => {
  const { hotel_id, room_number, type, price, availability } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO Rooms (hotel_id, room_number, type, price, availability) VALUES (?, ?, ?, ?, ?)',
      [hotel_id, room_number, type, price, availability]
    );
    res.status(201).json({ message: 'Room created successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mendapatkan kamar berdasarkan ID
exports.getRoomById = async (req, res) => {
  const { id } = req.params;

  try {
    const [room] = await db.query('SELECT * FROM Rooms WHERE id = ?', [id]);
    if (room.length === 0) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(room[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Memperbarui kamar berdasarkan ID
exports.updateRoomById = async (req, res) => {
  const { id } = req.params;
  const { room_number, type, price, availability } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE Rooms SET room_number = ?, type = ?, price = ?, availability = ? WHERE id = ?',
      [room_number, type, price, availability, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Room not found or no changes made' });
    }
    res.status(200).json({ message: 'Room updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Menghapus hotel berdasarkan ID
exports.deleteroom = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query('DELETE FROM Rooms WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Rooms not found' });
    }

    res.status(200).json({ message: 'Rooms deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};