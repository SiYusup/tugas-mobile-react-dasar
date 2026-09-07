// Soal 10: Penggabungan Modul Keranjang Belanja
// Aplikasi e-commerce memiliki data keranjang belanja yang terpisah dari beberapa halaman
// toko berbeda. Sebelum checkout, data keranjang tersebut harus digabung menjadi satu
// keranjang belanja utuh.
// Tugas: Diberikan dua buah array keranjang: let keranjangA = ["Sepatu", "Baju"] dan
// let keranjangB = ["Tas", "Topi"]. Gunakan Spread Operator (...) dalam ES6 untuk
// menggabungkan kedua array tersebut ke dalam variabel baru keranjangUtama =
// [...keranjangA, ...keranjangB, "Jaket"]. Tampilkan isi keranjangUtama ke console.

export default function PengembanganModulKeranjang() {
  let keranjangA = ["Sepatu", "Baju"];
  let keranjangB = ["Tas", "Topi"];
  let combinasiArray = [...keranjangA, ...keranjangB];
  console.log(kommbinasiArray);
}
