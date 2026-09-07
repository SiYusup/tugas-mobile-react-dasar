// Soal 7: Konversi Kalimat Notifikasi Menjadi Slug URL (.split() & .join())
// Developer backend bertugas membuat format slug URL untuk judul artikel blog aplikasi
// edukasi agar mudah dibaca oleh mesin pencari web.
// Tugas: Diberikan string kalimat let judul = "belajar pemrograman perangkat
// bergerak smk". Ubah string tersebut menjadi array kata-kata menggunakan method .split("
// "), lalu gabungkan kembali array tersebut menjadi sebuah string berformat slug menggunakan
// method .join("-") sehingga menghasilkan output "belajar-pemrograman-perangkat-bergerak-smk".

export default function KonversiKalimatNotifikasiMenjadiSlug() {
  let judul = "belajar pemrograman perangkat bergerak smk";
  let judulToArray = judul.split(" ");
  let result = judulToArray.join("-");
  console.log(result);
}
