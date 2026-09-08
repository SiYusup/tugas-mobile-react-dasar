// Soal 2
// Sistem keamanan backend memerlukan fungsi mandiri yang langsung mengembalikan sebuah
// kode verifikasi tetap berupa angka integer untuk keperluan enkripsi ringan sesi login.
// Tugas: Buat fungsi bernama dapatkanKodeUnik() yang menggunakan sintaks return
// untuk mengembalikan angka tetap 404, lalu tampung hasil pemanggilan fungsi tersebut ke
// dalam sebuah variabel dan cetak ke console.

function notfoundBackend() {
  return 404;
}
export default function KeamananBackend() {
  console.log(notfoundBackend());
}
