// Open • SiYusup (Usyup) opened about 1 day ago • 0 comments
// Assignees: SiYusup (Usyup)
// Labels: Soal Condition
// Milestone: Soal Seluruh Latihan Dasar React Native

//   ## Status Keaktifan Toko Berdasarkan Jam (Perbandingan Waktu

//   Buat variabel jamSekarang (angka format 24 jam, misal 19). Toko beroperasi dari jam
//   08.00 pagi sampai jam 17.00 sore. Gunakan kondisi untuk menampilkan status "Toko
//   Buka" jika jam berada di antara 8 dan 17, atau "Toko Tutup" jika di luar jam tersebut.

// View this issue on GitHub: https://github.com/SiYusup/tugas-mobile-react-dasar/issues/16
import { View, Text, StyleSheet } from "react-native";

export default function StatusKeaktifanToko() {
  // Mengambil jam saat ini dalam format 0-23 (24 jam)
  const jamSekarang = new Date().getHours();

  // Memeriksa apakah jam berada dalam rentang 08.00 - 17.00 (8 hingga 17)
  const statusToko =
    jamSekarang >= 8 && jamSekarang <= 17 ? "Toko Buka" : "Toko Tutup";

  return (
    <View style={styles.container}>
      <Text style={styles.textJam}>Jam Saat Ini: {jamSekarang}:00</Text>
      <Text
        style={[
          styles.textStatus,
          statusToko === "Toko Buka" ? styles.buka : styles.tutup,
        ]}
      >
        Status: {statusToko}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textJam: {
    fontSize: 18,
    marginBottom: 8,
  },
  textStatus: {
    fontSize: 22,
    fontWeight: "bold",
  },
  buka: {
    color: "green",
  },
  tutup: {
    color: "red",
  },
});