# Perkembangan Sistem Manajemen Hotel Berbasis REST API dengan Node.js dan MySQL

## 📌 Pendahuluan

Proyek ini adalah sistem manajemen hotel berbasis REST API yang dikembangkan menggunakan **Node.js** dan **MySQL**. Sistem ini memungkinkan pengelolaan hotel, kamar, pengguna, dan pemesanan secara efisien dengan autentikasi **JWT** serta keamanan berbasis **bcrypt** untuk enkripsi kata sandi.

## 🚀 Fitur Utama

- **Manajemen Pengguna** 🧑‍💼

  - Registrasi dan login pengguna
  - Pengelolaan peran (Admin, User)
  - Keamanan data dengan enkripsi

- **Manajemen Hotel** 🏨

  - Tambah, ubah, hapus, dan lihat data hotel
  - Penyimpanan informasi lokasi dan rating hotel

- **Manajemen Kamar** 🏠

  - Tambah, ubah, hapus, dan lihat data kamar
  - Mengelola ketersediaan dan harga kamar

- **Manajemen Pemesanan** 📅

  - Pemesanan kamar hotel
  - Update status pemesanan
  - Riwayat pemesanan pengguna

- **Keamanan & Autentikasi** 🔒

  - **JWT Authentication** untuk keamanan API
  - Hashing password dengan **bcrypt**

## 🛠️ Teknologi yang Digunakan

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Keamanan:** JWT, bcrypt
- **Middleware:** dotenv, body-parser
- **Tools:** Postman (pengujian API), GitHub (versi kontrol)

## 📂 Struktur Proyek

```
📂 project-folder/
├── 📂 Config/
│   ├── db.js (Koneksi database)
├── 📂 Controllers/
│   ├── authController.js (Autentikasi)
│   ├── hotelController.js (Manajemen Hotel)
│   ├── roomController.js (Manajemen Kamar)
│   ├── bookingController.js (Manajemen Pemesanan)
│   ├── userController.js (Manajemen Pengguna)
├── 📂 Middleware/
│   ├── authMiddleware.js (Proteksi route dengan JWT)
├── 📂 Routes/
│   ├── auth.js (Route autentikasi)
│   ├── hotel.js (Route hotel)
│   ├── room.js (Route kamar)
│   ├── booking.js (Route pemesanan)
│   ├── user.js (Route pengguna)
├── .env (Konfigurasi variabel lingkungan)
├── server.js (Entry point aplikasi)
├── package.json (Daftar dependensi)
```

## ⚙️ Instalasi & Konfigurasi

1. **Clone repositori ini:**
   ```sh
   git clone https://github.com/username/hotel-management-api.git
   cd hotel-management-api
   ```
2. **Instal dependensi:**
   ```sh
   npm install
   ```
3. **Buat file ********************`.env`******************** dan atur variabel lingkungan:**
   ```env
   PORT=5000
   JWT_SECRET=myrandomsecuresecret
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=hotel_management
   ```
4. **Jalankan server:**
   ```sh
   npm start
   ```
5. **Uji endpoint dengan Postman atau browser di:**
   ```
   http://localhost:5000/
   ```

## 📡 Endpoint API

| HTTP Method | Endpoint         | Deskripsi                |
| ----------- | ---------------- | ------------------------ |
| **POST**    | `/auth/register` | Registrasi pengguna baru |
| **POST**    | `/auth/login`    | Login pengguna           |
| **GET**     | `/users`         | Lihat semua pengguna     |
| **PUT**     | `/users/:id`     | Update peran pengguna    |
| **GET**     | `/hotels`        | Lihat semua hotel        |
| **POST**    | `/hotels`        | Tambah hotel baru        |
| **GET**     | `/rooms`         | Lihat semua kamar        |
| **POST**    | `/rooms`         | Tambah kamar baru        |
| **GET**     | `/bookings`      | Lihat semua pemesanan    |
| **POST**    | `/bookings`      | Buat pemesanan baru      |

## 🎯 Pengujian API

Gunakan **Postman** untuk melakukan pengujian pada endpoint API dengan metode **GET, POST, PUT, dan DELETE**.

## 📢 Kontribusi

Jika ingin berkontribusi:

1. **Fork repo ini**
2. **Buat branch baru** (`git checkout -b feature-name`)
3. **Lakukan perubahan & commit** (`git commit -m 'Add new feature'`)
4. **Push ke branch** (`git push origin feature-name`)
5. **Buat Pull Request** dan diskusikan kontribusi Anda

## 📝 Lisensi

Proyek ini menggunakan lisensi **MIT**, sehingga dapat digunakan dan dikembangkan lebih lanjut secara bebas.

---

✨ **Dibuat dengan ❤️ oleh [Ranggis, Advent, Nadzar, Rizqi, Rifqki]** ✨
