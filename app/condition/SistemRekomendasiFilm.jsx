// Open • SiYusup (Usyup) opened about 2 days ago • 0 comments
// Assignees: SiYusup (Usyup)
// Labels: Soal Condition
// Milestone: Soal Seluruh Latihan Dasar React Native

//   ## Sistem Rekomendasi Film Berdasarkan Usia (Logika Rentang Usia)

//   Buat variabel angka usiaPenonton.

//   • Jika usia < 13, tampilkan badge teks: "Kategori: Semua Umur (SU)".
//   • Jika usia 13 sampai 17, tampilkan badge teks: "Kategori: Remaja (R)".
//   • Jika usia di atas 17, tampilkan badge teks: "Kategori: Dewasa (D)

// View this issue on GitHub: https://github.com/SiYusup/tugas-mobile-react-dasar/issues/21

import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function SistemRekomendasiFilm() {
  const [usiaPenonton, setUsiaPenonton] = useState("");

  // Konversi input teks ke angka
  const usia = parseInt(usiaPenonton, 10);

  // Fungsi penentu kategori rating film
  const getKategoriFilm = () => {
    if (isNaN(usia) || usiaPenonton === "") {
      return null;
    }

    if (usia < 13) {
      return {
        label: "Kategori: Semua Umur (SU)",
        style: styles.badgeSU,
      };
    } else if (usia >= 13 && usia <= 17) {
      return {
        label: "Kategori: Remaja (R)",
        style: styles.badgeR,
      };
    } else {
      return {
        label: "Kategori: Dewasa (D)",
        style: styles.badgeD,
      };
    }
  };

  const kategori = getKategoriFilm();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistem Rekomendasi Film</Text>

      <TextInput
        style={styles.input}
        value={usiaPenonton}
        onChangeText={setUsiaPenonton}
        placeholder="Masukkan usia anda (contoh: 15)"
        keyboardType="numeric"
        placeholderTextColor="#999"
      />

      {/* Menampilkan badge kategori jika usia valid */}
      {kategori && (
        <View style={[styles.badgeContainer, kategori.style]}>
          <Text style={styles.badgeText}>{kategori.label}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    margin: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
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
    marginBottom: 16,
  },
  badgeContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  badgeSU: {
    backgroundColor: "#2e7d32", // Hijau
  },
  badgeR: {
    backgroundColor: "#f57c00", // Oranye
  },
  badgeD: {
    backgroundColor: "#c62828", // Merah
  },
});
