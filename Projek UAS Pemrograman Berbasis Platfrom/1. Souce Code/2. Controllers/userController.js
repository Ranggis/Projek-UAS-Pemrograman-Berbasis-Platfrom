const db = require('../Config/db');

// Mendapatkan semua pengguna
exports.getUsers = async (req, res) => {
  try {
    const [users] = await db.query('SELECT id, name, email, role, created_at FROM Users');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Memperbarui role pengguna (dengan otentikasi)
exports.updateUserRole = async (req, res) => {
  const { id, role } = req.body;

  try {
    const [result] = await db.query('UPDATE Users SET role = ? WHERE id = ?', [role, id]);
    res.status(200).json({ message: 'User role updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mendapatkan pengguna berdasarkan ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const [user] = await db.query('SELECT id, name, email, role, created_at FROM Users WHERE id = ?', [id]);
    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Memperbarui peran pengguna berdasarkan ID
exports.updateUserRoleById = async (req, res) => {
  const { id } = req.params; // ID dari parameter URL
  const { role } = req.body; // Role dari body request

  try {
    const [result] = await db.query('UPDATE Users SET role = ? WHERE id = ?', [role, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found or no changes made' });
    }
    res.status(200).json({ message: 'User role updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Membuat pengguna baru
exports.createusers = async (req, res) => {
  const { id, name, email, password, role } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO users(id, name, email, password, role) VALUES (?, ?, ?, ?, ?)',
      [id, name, email, password, role]
    );
    res.status(201).json({ message: 'Users created successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mengupdate data Pengguna berdasarkan ID
exports.updateusers = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE Users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?',
      [name, email, password, role, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Menghapus hotel berdasarkan ID
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query('DELETE FROM Users WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Users not found' });
    }

    res.status(200).json({ message: 'Users deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};