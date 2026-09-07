// Soal 8: Ekstraksi Data Siswa Berprestasi
// Fitur Leaderboard aplikasi game kuis menampilkan 3 peringkat teratas siswa berdasarkan skor
// tertinggi yang diperoleh dari array data nilai.
// Tugas: Diberikan array skor let skorSiswa = [98, 85, 90, 75, 80]. Gunakan fitur
// modern ES6 Array Destructuring untuk memetakan tiga elemen pertama ke dalam variabel
// juaraSatu, juaraDua, dan juaraTiga. Cetak ketiga variabel tersebut ke console

export default function EkstraksiDataSiswaBerprestasi() {
  let skorSiswa = [98, 85, 90, 75, 80];
  // 1. Urutkan skor dari yang tertinggi ke terendah
  skorSiswa.sort((a, b) => b - a); // Hasilnya: [98, 90, 85, 80, 75]

  // 2. Gunakan ES6 Array Destructuring untuk mengambil 3 elemen pertama
  let [juaraSatu, juaraDua, juaraTiga] = skorSiswa;

  // 3. Cetak ketiga variabel ke console
  console.log(juaraSatu); // Output: 98

  console.log(juaraDua);

  console.log(juaraTiga); // Output: 85
}
