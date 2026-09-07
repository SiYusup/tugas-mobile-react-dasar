// Soal 4: Penambahan Nomor Darurat di Posisi Depan Antrean (.unshift() & .shift())
// Dalam aplikasi layanan darurat call-center, nomor laporan prioritas tinggi harus disisipkan 
// secara otomatis ke urutan paling depan (indeks 0) dari daftar antrean yang ada.
// Tugas: Diberikan array let darurat = ["Kebakaran", "Kecelakaan"]. Tambahkan string
// "Medis Darurat" di posisi paling depan menggunakan .unshift(). Kemudian hapus elemen
// terdepan tersebut menggunakan .shift(). Tampilkan hasil akhirnya.

import { Text } from "react-native-web";

function PenambahanNomorDarurat() {
  let darurat = ["Kebakaran", "Kecelakaan"];

  darurat.unshift("Madis Darurat");
  darurat.shift();

  return (
    <div>
      <Text>{darurat}</Text>
    </div>
  );
}
export default PenambahanNomorDarurat;
