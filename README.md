# Online Library Website
Kontributor : Husnia Munzayana

## Penjelasan Ringkas Program
Repository ini beeisi implementasi dari sebuah situs web _online library_ yang memungkinkan pengguna untuk menjelajahi daftar buku serta melihat detail buku. Pengguna juga dapat melakukan operasi registrasi, login, dan logout. Selain itu, pengguna yang sudah masuk ke akun mereka memiliki akses tambahan, yaitu kemampuan untuk menambahkan, mengedit, dan menghapus buku.

Sisi frontend website ini diimplementasikan dalam folder `./frontend/` dan sisi backend pada folder `/backend/`. Untuk pengembangan backend, teknologi yang digunakan adalah NodeJS, Express.js, Prisma, dan database PostgreSQL. Sementara itu, pada sisi frontend, proyek ini NextJS dan Tailwind CSS untuk manajemen tata letak dan desain.

Fitur utama dari situs web ini meliputi:
- Autentikasi Pengguna: Sistem autentikasi memungkinkan pengguna untuk _login_ ke akun mereka atau _register_ untuk membuat akun baru.
- Tampilan daftar buku: Pengguna dapat melihat daftar lengkap buku yang tersedia.
- Detail buku: Pengguna dapat melihat informasi rinci tentang setiap buku, termasuk judul, penulis, penerbit, tahun terbit, jumlah halaman, dan cover buku.
- Manajemen CRUD Buku: Pengguna yang masuk dapat menambahkan buku baru ke perpustakaan, mengedit informasi buku yang sudah ada, dan menghapus buku yang tidak diperlukan lagi.

## Pre-Requisite
- Node.js
- npm atau yarn
- Express.js
- Prisma
- React
- Vite
- Tailwind CSS
- Multer
- NextJS

## Cara Menjalankan Program
### Back End
1. Clone repository ini : `https://github.com/munzayanahusn/HW-Online-Library-NextJS.git`
2. Buka terminal dan arahkan ke directory tempat clone
3. Arahkan ke folder backend : `cd backend`
4. Setup database masing-masing
5. Buat file `.env` yang berisi:
  ```
   DATABASE_URL=postgres://username:password@localhost:5432/database_name
   JWT_SECRET=mysecretkey
  ```
6. Install dependencies dengan perintah : `yarn install`
7. Lakukan migrasi database dengan perintah : `yarn migrate`
8. Jalankan perintah : `yarn prisma generate`
9. Jalankan backend dengan perintah : `yarn start`
10. Akan muncul tulisan "Server started on port 8000" yang menandakan server sudah berjalan.

> Ubah username, password, dan database_name pada `.env` sesuai setup database yang telah dibuat. Anda juga dapat mengubah mysecretkey menjadi JWT_SECRET yang Anda inginkan

### Front End
1. Clone repository ini : `https://github.com/munzayanahusn/HW-Online-Library-NextJS.git`
2. Buka terminal dan arahkan ke directory tempat clone
3. Arahkan ke folder frontend : `cd frontend`
4. Install dependencies dengan perintah : `npm install`
5. Jalankan backend dengan perintah : `npm run dev`
6. Akan muncul
    ```
    > frontend-next@0.1.0 dev
    > next dev

      ▲ Next.js 14.2.3
      - Local:        http://localhost:3000

      ✓ Starting...
      ✓ Ready in 1790ms

    ```
    yang menandakan frontend website sudah berjalan.
7. Buka website malalui `http://localhost:3000/`

## Tampilan Halaman Website
### Halaman Beranda
![Screenshot HomePage Online Library Website](./docs/screenshot-homepage.png)

### Halaman Detail Buku [Saat User Sudah Login]
![Screenshot Book's Detail Online Library Website](./docs/screenshot-bookdetail-login.png)

### Halaman Detail Buku [Saat User Belum Login]
![Screenshot Book's Detail Online Library Website](./docs/screenshot-bookdetail.png)

### Halaman Menambahkan Buku
![Screenshot Create Book Online Library Website](./docs/screenshot-create.png)

### Halaman Mengedit Buku
![Screenshot Edit Book Online Library Website](./docs/screenshot-edit.png)

### Halaman Menghapus Buku
![Screenshot Delete Book Online Library Website](./docs/screenshot-delete.png)

### Halaman Pendaftaran/Register
![Screenshot Register Online Library Website](./docs/screenshot-register.png)

### Tampilan Login
![Screenshot Login Online Library Website](./docs/screenshot-login.png)