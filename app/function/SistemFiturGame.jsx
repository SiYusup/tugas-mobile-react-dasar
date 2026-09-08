// Soal 7
// Fitur game edukasi membutuhkan fungsi internal untuk mencetak perulangan angka hitung
// mundur mulai dari angka 0 hingga batas iterasi tertentu yang dikirimkan lewat parameter.
// Tugas: Buat fungsi bernama jalankanHitungMundur(batas) yang di dalamnya berisi
// for-loop dari var i = 0; i < batas; i++ dan mencetak nilai i ke console. Uji
// // fungsi dengan parameter 4.

function jalankanHitungMundur(batas) {
  for (let i = 0; i < batas; i++) {
    console.log(i);
  }
}

export default function SistemFiturGame() {
  // Pengujian fungsi dengan parameter 4
  jalankanHitungMundur(4);
}
