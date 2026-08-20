// Open • SiYusup (Usyup) opened about 2 days ago • 0 comments
// Assignees: SiYusup (Usyup)
// Labels: Soal Condition
// Milestone: Soal Seluruh Latihan Dasar React Native

//   ## Ketersediaan Stok Produk (Switch / If-Else Majemuk)
import { StyleSheet, Text, View } from "react-native";

//   Buat variabel angka stokBarang.

//   • Jika stok > 10, tampilkan teks "Stok Tersedia" (hijau).
//   • Jika stok antara 1 sampai 10, tampilkan teks "Stok Terbatas! Segera Beli" (oranye).
//   • Jika stok sama dengan 0, tampilkan teks "Stok Habis" (merah).

// View this issue on GitHub: https://github.com/SiYusup/tugas-mobile-react-dasar/issues/20

export default function KetersediaanStockProduk() {
  const stokBarang = 5; // Masukkan angka stok di sini untuk pengujian

  // Fungsi pembantu untuk menentukan status dan style berdasarkan stok
  const getStatusStok = () => {
    switch (true) {
      case stokBarang > 10:
        return {
          teks: "Stok Tersedia bang",
          style: styles.stokTersedia,
        };
      case stokBarang >= 1 && stokBarang <= 10:
        return {
          teks: "Stok Terbatas! Segera Beli bang",
          style: styles.stokTerbatas,
        };
      case stokBarang === 0:
        return {
          teks: "Stok Habis bang",
          style: styles.stokHabis,
        };
      default:
        return {
          teks: "Jumlah stok tidak valid bang",
          style: styles.stokDefault,
        };
    }
  };

  const status = getStatusStok();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Jumlah Stok: {stokBarang}</Text>
      <Text style={[styles.statusText, status.style]}>{status.teks}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  statusText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  stokTersedia: {
    color: "green",
  },
  stokTerbatas: {
    color: "orange",
  },
  stokHabis: {
    color: "red",
  },
  stokDefault: {
    color: "#666",
  },
});
