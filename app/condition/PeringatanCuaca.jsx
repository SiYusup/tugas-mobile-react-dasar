// Soal Condition 2 : Peringatan Cuaca Panas (Logical AND &&) SiYusup/tugas-mobile-react-dasar#13
// Open • SiYusup (Usyup) opened about 1 day ago • 0 comments
// Assignees: SiYusup (Usyup)
// Labels: Soal Condition
// Milestone: Soal Seluruh Latihan Dasar React Native

import { Text, View } from "react-native-web";

//   ## Peringatan Cuaca Panas (Logical AND &&)

//   Buat variabel suhuUdara (angka). Gunakan operator Logical AND (&&) untuk
//   menampilkan kotak peringatan bertuliskan "Peringatan: Cuaca Sangat Panas Hari Ini!"
//   hanya jika nilai suhu udara melebihi 35 derajat. Jika di bawah atau sama dengan 35, kotak
//   peringatan tidak boleh muncul

// View this issue on GitHub: https://github.com/SiYusup/tugas-mobile-react-dasar/issues/13

export default function PeringatanCuaca() {
  const suhu = 38;
  let message = "Undifined";

  if (suhu > 50) {
    message = `Cuaca Hari Ini Sangat Panas dengan Suhu ${suhu}`;
  } else if (suhu > 40 && suhu < 50) {
    message = `Cuaca Hari Ini Pansa dengan Suhu ${suhu}`;
  } else if (suhu > 30 && suhu < 35) {
    message = `Cuaca Hari Ini Normal dengan Suhu ${suhu}`;
  } else if (suhu > 20 && suhu < 30) {
    message = `Cuaca Hari Ini Dingin dengan Suhu ${suhu}`;
  } else if (suhu > 0 && suhu > 20) {
    message = `Cuaca Hari Ini Sangat Dingin dengan Suhu ${suhu}`;
  } else {
    message = `Cuca Berjalan Tidak Seperti Biasanya dengan suhu ${suhu} `;
  }

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
