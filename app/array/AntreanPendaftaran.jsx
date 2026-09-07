// Soal 3: Antrean Pendaftaran Peserta Vaksinasi (.push() & .pop())
// Sistem pendaftaran vaksinasi mobile melayani penambahan peserta baru di antrean paling
// belakang, serta melayani peserta pertama yang selesai dipanggil (dikeluarkan dari daftar).
// Tugas: Buat array kosong let antreanVaksin = []. Masukkan nama "Andi", "Budi", dan
// "Siti" secara berturut-turut menggunakan method .push(). Setelah itu, keluarkan satu
// elemen antrean di posisi paling belakang menggunakan method .pop(). Tampilkan kondisi
// akhir array ke console

import { Text } from "react-native-web";

function AntreanPendaftaran() {
  let antrianVaksin = ["Andi", "Budi", "Rudi", "Sholeh", "Farhan"];
  antrianVaksin.push("Andi");
  antrianVaksin.push("Budi");
  antrianVaksin.push("Rudi");
  antrianVaksin.push("Sholeh");
  antrianVaksin.push("Farhan");

  antrianVaksin.pop();
  antrianVaksin.pop();
  antrianVaksin.pop();
  antrianVaksin.pop();
  antrianVaksin.pop();
  antrianVaksin.pop();

  return (
    <div>
      <Text>Soal 3: Antrean Pendaftaran Peserta Vaksinasi</Text>
      <Text>{antrianVaksin}</Text>
    </div>
  );
}
export default AntreanPendaftaran;
