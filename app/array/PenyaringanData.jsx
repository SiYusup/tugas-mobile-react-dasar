// Soal 5: Penyaringan Data Laporan Menggunakan Irisan (.slice())
// Tim analis data aplikasi ingin mengambil sampel data transaksi bulanan dari indeks tertentu
// hingga batas tertentu tanpa merusak atau mengubah data array master aslinya.
// Tugas: Diberikan data transaksi let transaksi = [1000, 2500, 3200, 4100, 5000].
// Gunakan method .slice(1, 4) untuk mengambil sebagian data transaksi tersebut ke dalam
// variabel baru bernama sampelData, lalu cetak hasilnya.

export default function PenyaringanData() {
  let transaksi = [1000, 2500, 3200, 4100, 5000];
  let sampelData = transaksi.slice(1, 4);
  console.log(sampelData);
}
