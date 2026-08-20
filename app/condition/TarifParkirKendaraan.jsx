// Open • SiYusup (Usyup) opened about 2 days ago • 0 comments
// Assignees: SiYusup (Usyup)
// Labels: Soal Condition
// Milestone: Soal Seluruh Latihan Dasar React Native

import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

//   ## Tarif Parkir Kendaraan Berdasarkan Jenis (Kondisi Tipe Kendaraan)

//   Buat variabel string jenisKendaraan (bisa berisi "Mobil" atau "Motor").

//   • Jika "Mobil", tampilkan teks nominal tarif: "Tarif Parkir: Rp 5.000 / jam".
//   • Jika "Motor", tampilkan teks nominal tarif: "Tarif Parkir: Rp 2.000 / jam".
//   • Gunakan kondisi untuk menampilkan teks ini di layar.

// View this issue on GitHub: https://github.com/SiYusup/tugas-mobile-react-dasar/issues/19

export default function TarifParkitKendaran() {
  const [jenisKendaraan, setJenisKendaraan] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengecekan Tarif Parkir Anda</Text>
      <Text style={styles.subtitle}>Hanya Ada Mobil dan Motor Saja</Text>

      <TextInput
        style={styles.input}
        value={jenisKendaraan}
        // Validasi otomatis menjadi huruf kecil yang semula bebas mengiputkannya
        onChangeText={(text) => setJenisKendaraan(text.toLowerCase())}
        placeholder="Masukkan jenis kendaraan anda (mobil/motor)"
        placeholderTextColor="#999"
        autoCapitalize="none"
      />

      {/* Kondisi untuk Motor */}
      {jenisKendaraan === "motor" && (
        <Text style={styles.pesanTarif}>Tarif Parkir: Rp 2.000 / jam</Text>
      )}

      {/* Kondisi untuk Mobil */}
      {jenisKendaraan === "mobil" && (
        <Text style={styles.pesanTarif}>Tarif Parkir: Rp 5.000 / jam</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    margin: 16,
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
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
    fontSize: 14,
    color: "#333",
    marginBottom: 12,
  },
  pesanTarif: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2e7d32",
    marginTop: 8,
  },
});
