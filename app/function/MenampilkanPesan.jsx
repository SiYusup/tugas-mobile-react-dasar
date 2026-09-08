// SOAL 1
// Sebuah aplikasi mobile sapaan harian memerlukan modul fungsi sederhana untuk
// menampilkan pesan selamat datang secara otomatis ke console setiap kali aplikasi pertama kali
// dibuka.
// Tugas: Buat sebuah fungsi bernama tampilkanPesan() tanpa parameter yang mencetak
// teks "Selamat Datang di Aplikasi Mobile SMK!" ke console, lalu panggil fungsi
// tersebut.

function menampilkanPesanAnda() {
  return "Selamat Datang di Aplikasi Mobile SMK!";
}

export default function MenampilaknPesan() {
  let pesan = menampilkanPesanAnda();
  console.log(pesan);
}
