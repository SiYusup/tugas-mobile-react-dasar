//   ## Soal 6: Kalkulator Diskon Belanja Harian (Operator Aritmatika & Assignment)

//   Sebuah toko kelontong digital ingin menghitung total belanja akhir pelanggan setelah
//   mendapatkan potongan harga tetap menggunakan operator assignment.

//   Tugas: Inisialisasi variabel awal totalBelanja = 250000. Pelanggan mendapatkan
//   kupon potongan langsung sebesar 50000 (gunakan operator assignment pengurangan -=).
//   Setelah itu, dikenakan pajak layanan sebesar 10% dari sisa total belanja (gunakan operator
//   perkalian dan penjumlahan). Tampilkan hasil akhir total pembayaran.

export default function KalkulatorDiskonBelanjaHarian() {
  let price = 250_000;
  price -= 50_000; // Diskon pertama dengan potongan 50000
  price -= (price * 10) / 100; // Diskon potongan 10%

  return (
    <div>
      <p>Jadi Total Harganya : {price}</p>
    </div>
  );
}
