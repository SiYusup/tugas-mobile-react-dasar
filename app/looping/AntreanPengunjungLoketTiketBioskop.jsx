// Soal Looping 1: Antrean Pengunjung Loket Tiket Bioskop (For-Loop Sederhana) SiYusup/tugas-mobile-react-dasar#22
// Open • SiYusup (Usyup) opened about 5 days ago • 0 comments
// Assignees: SiYusup (Usyup)
// Labels: Soal Looping
// Milestone: Soal Seluruh Latihan Dasar React Native

//   ## Antrean Pengunjung Loket Tiket Bioskop (For-Loop Sederhana)

//   Sebuah bioskop lokal ingin mencetak nomor urut tiket antrean otomatis bagi pengunjung
//   yang datang dari nomor urut 1 sampai dengan 8.

//   Tugas: Gunakan for-loop untuk menampilkan teks ke console dengan format: "Tiket
//   antrean nomor: [angka]", dimulai dari angka 1 hingga 8.

// View this issue on GitHub: https://github.com/SiYusup/tugas-mobile-react-dasar/issues/22

import { StyleSheet, Text, View } from "react-native";

export default function AntreanPengunjungLoketTiketBioskop() {
  const tiket = [];

  for (let nomorUrut = 1; nomorUrut <= 8; nomorUrut++) {
    const pesanTiket = `Tiket antrean nomor: ${nomorUrut}`;
    tiket.push(pesanTiket);
    console.log(pesanTiket);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Antrean Pengunjung Loket Tiket Bioskop</Text>
      <Text style={styles.subtitle}>Daftar Tiket Antrean 1 - 8</Text>

      {/* Menampilkan hasil for-loop ke layar */}
      {tiket.map((pesan) => (
        <Text key={pesan} style={styles.item}>
          {pesan}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    margin: 16,
    alignSelf: "stretch",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  item: {
    fontSize: 14,
    color: "#333",
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
});
