// Soal 5
// Aplikasi pesan-antar makanan menetapkan tarif ongkos kirim standar jika pengguna tidak
// memasukkan zona wilayah khusus.
// Tugas: Buat fungsi menggunakan fitur ES6 default parameter bernama
// hitungOngkir(jarak, tarif = 5000) yang mengembalikan hasil perkalian jarak
// * tarif. Uji pemanggilan fungsi dengan dua skenario: mengirim dua parameter (3, 7000)
// dan hanya mengirim satu parameter (4).

function penghitungParkir(jarak, tarif = 5000) {
  return jarak * tarif;
}

export default function PenghitungHargaParkir() {
  let hargaParkirA = penghitungParkir(4);
  console.log(hargaParkirA);
  let hargaParkirB = penghitungParkir(5, 2000);
  console.log(hargaParkirB);
}
