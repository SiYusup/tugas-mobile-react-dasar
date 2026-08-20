# React Native Dasar

Project latihan mata pelajaran **Progli (Pemrograman Mobile)** kelas XII untuk mempelajari dasar-dasar **React Native** menggunakan **Expo**. Aplikasi ini **bukan** aplikasi CRUD, melainkan kumpulan latihan soal pemrograman dasar yang menampilkan hasil setiap soal langsung di layar.

## Teknologi

- [Expo](https://expo.dev) SDK 54 (menggunakan `create-expo-app`)
- [React Native](https://reactnative.dev) `0.81.5`
- [Expo Router](https://docs.expo.dev/router/introduction) (file-based routing)
- TypeScript + JavaScript (JSX)

## Menjalankan Aplikasi

1. Install dependencies:

   ```bash
   npm install
   ```

2. Jalankan aplikasi:

   ```bash
   npx expo start
   ```

3. Buka aplikasi di salah satu opsi berikut:
   - [Expo Go](https://expo.dev/go) (paling cepat untuk mencoba)
   - Android emulator / iOS simulator
   - Browser web (`npx expo start --web`)

## Struktur Project

```
app/
├── _layout.tsx              # Root layout (Expo Router Stack)
├── index.tsx                # Halaman utama (menampilkan semua latihan)
├── pages/
│   ├── VariablePages.jsx    # Kumpulan soal materi Variabel (Soal 1–10)
│   ├── ConditionPages.jsx   # Kumpulan soal materi Condition (Soal 1–10)
│   └── LoopingPages.jsx     # Kumpulan soal materi Looping (masih kosong)
├── variable/                # 10 latihan soal variabel
├── condition/               # 10 latihan soal kondisi
└── looping/                 # Folder latihan looping (masih kosong)
```

## Daftar Latihan Soal

### Materi Variabel (`app/variable/`)

1. **Sistem Registrasi Akun** — Variabel & String, deklarasi `let`/`const` + Template Literals.
2. **Validasi Nama Pengguna** — Validasi username menggunakan `trim()` dan `length`.
3. **Sensor Kata Kasar** — Deteksi komentar kasar dengan `substring()` dan `indexOf()`.
4. **Kode Kupon Diskon Otomatis** — String Concatenation & `toUpperCase()`.
5. **Konversi Tipe Data Harga** — Konversi tipe data dengan `Number` & `parseInt`.
6. **Kalkulator Diskon Belanja Harian** — Operator Aritmatika & Assignment (`-=`, persentase).
7. **Sistem Validasi Usia Pengguna** — Operator perbandingan standar & strict (`==` vs `===`).
8. **Verifikasi Keamanan Login Ganda** — Operator kondisional AND (`&&`).
9. **Pengecekan Syarat Beasiswa Sekolah** — Operator kondisional OR (`||`).
10. **Scope Variable Let dan Var** — Studi kasus block scope di keranjang belanja.

### Materi Condition (`app/condition/`)

1. **Cek Kelulusan Ujian** — Operator ternary dasar.
2. **Peringatan Cuaca Panas** — Logical AND (`&&`).
3. **Status Login Pengguna** — Kondisi boolean + string.
4. **Diskon Keranjang Belanja** — Kondisi bertingkat / nested ternary.
5. **Status Keaktifan Toko** — Kondisi berdasarkan jam operasional.
6. **Mode Tampilan** — Logika dark mode dengan boolean.
7. **Validasi Password Pendaftaran** — Validasi dengan operator `&&`.
8. **Tarif Parkir Kendaraan** — Kondisi berdasarkan jenis kendaraan.
9. **Ketersediaan Stock Produk** — Kondisi berdasarkan jumlah stok.
10. **Sistem Rekomendasi Film** — Kondisi berdasarkan usia penonton.

### Materi Looping (`app/looping/`)

Masih dalam pengerjaan (folder dan halaman `LoopingPages.jsx` masih kosong).

## Status Pengerjaan

| Materi    | Status                 |
| --------- | ---------------------- |
| Variabel  | Selesai (10 soal)      |
| Condition | Selesai (10 soal)      |
| Looping   | Belum dikerjakan       |

> Aplikasi ini adalah latihan pembelajaran, sehingga setiap komponen soal langsung dirender di halaman utama tanpa menggunakan navigasi antar halaman.