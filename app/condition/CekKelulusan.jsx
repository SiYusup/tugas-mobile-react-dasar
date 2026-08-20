// Soal Condition 1 : Aplikasi Cek Kelulusan Ujian (Ternary Dasar) SiYusup/tugas-mobile-react-dasar#12
// Open • SiYusup (Usyup) opened about 1 day ago • 0 comments
// Assignees: SiYusup (Usyup)
// Labels: Soal Condition
// Milestone: Soal Seluruh Latihan Dasar React Native

//   ## Aplikasi Cek Kelulusan Ujian (Ternary Dasar)

//   Buat variabel nilaiUjian (angka 0–100). Gunakan operator ternary untuk menampilkan
//   teks "Selamat, Anda Lulus! " dengan warna hijau jika nilai di atas atau sama dengan 75,
//   atau "Maaf, Anda Belum Lulus. " dengan warna merah jika di bawah 75

// View this issue on GitHub: https://github.com/SiYusup/tugas-mobile-react-dasar/issues/12

import { Text, View } from "react-native-web";

export default function CekKelulusan() {
  const nama_1 = "Ardiansyah";
  const nilai_1 = 80;

  const nama_2 = "Yusuf";
  const nilai_2 = 65;

  return (
    <View>
      <Text>
        Hallo {nama_1}, anda dinyatakan {nilai_1 > 80 ? "lulus" : "tidak lulus"}
      </Text>
      <Text>
        Hallo {nama_2}, anda dinyatakan {nilai_2 > 80 ? "lulus" : "tidak lulus"}
      </Text>
    </View>
  );
}
