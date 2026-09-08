// Soal 3
// Aplikasi e-commerce menghitung harga diskon produk khusus. Sebuah fungsi dibutuhkan
// untuk menerima input harga dasar barang dan mengalikannya dengan angka dua sebagai
// simulasi promo double bonus.
// Tugas: Buat fungsi bernama hitungPromo(harga) yang menerima satu parameter, lalu
// kembalikan nilai harga * 2 menggunakan return. Uji fungsi dengan mengirimkan nilai
// parameter 75000.

function hitungPromoBarang(harga) {
  return harga * 2;
}

export default function InputBarangToko() {
  let totalPromo = hitungPromoBarang(75000);
  console.log(totalPromo);
}
