// Soal 4
// Fitur keranjang belanja memerlukan fungsi yang menjumlahkan subtotal harga dua jenis
// barang berbeda yang dibeli oleh pengguna secara bersamaan.
// Tugas: Buat fungsi dengan dua parameter bernama
// jumlahkanBelanja(hargaBarangA, hargaBarangB) yang mengembalikan total
// penambahan kedua parameter tersebut. Uji fungsi dengan mengirimkan nilai 120000 dan
// 85000.

function jumlahkanBelanja(hargaBarangA, hargaBarangB) {
  return hargaBarangA + hargaBarangB;
}

export default function MenjumlahkanTotalBelanja() {
  let totalHargaBelanjaan = jumlahkanBelanja(20000, 800000);
  console.log(totalHargaBelanjaan);
}
