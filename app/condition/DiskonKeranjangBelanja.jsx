// Soal Condition 4 : Diskon Keranjang Belanja (Kondisi Bertingkat / Nested Ternary) SiYusup/tugas-mobile-react-dasar#15
// Open • SiYusup (Usyup) opened about 1 day ago • 0 comments
// Assignees: SiYusup (Usyup)
// Labels: Soal Condition
// Milestone: Soal Seluruh Latihan Dasar React Native

import { useState } from "react";
import { Text, TextInput, View } from "react-native";

//   ## Diskon Keranjang Belanja (Kondisi Bertingkat / Nested Ternary)

//   Buat variabel totalBelanja (angka).

//   1. Jika belanja > 500.000, tampilkan teks "Anda Mendapat Diskon 20%! " (warna
//   2. ungu).
//   3. Jika belanja antara 200.000 sampai 500.000, tampilkan teks "Anda Mendapat Diskon 10%! " (warna biru).
//   4. Jika di bawah 200.000, tampilkan teks "Belanja lebih banyak untuk dapat diskon!" (warna abu-abu)

// View this issue on GitHub: https://github.com/SiYusup/tugas-mobile-react-dasar/issues/15

export default function DiskonKeranjangBelanja() {
  const [pay, setPay] = useState("");

  // Mengubah string dari state 'pay' menjadi number
  const totalBelanja = Number(pay);

  return (
    <View>
      <Text>Selamat Datang Ke Toko Sejahtera</Text>
      <Text>Bisa Dicek Diskonnya</Text>

      {/* Input untuk memasukkan total belanja */}
      <TextInput
        placeholder="Masukkan total belanja (Contoh: 250000)"
        keyboardType="numeric"
        value={pay}
        onChangeText={(text) => setPay(text)}
      />

      {/* Logika Kondisi Bertingkat / Nested Ternary */}
      {totalBelanja > 500000 ? (
        <Text>Anda Mendapat Diskon 20%! </Text>
      ) : totalBelanja >= 200000 && totalBelanja <= 500000 ? (
        <Text>Anda Mendapat Diskon 10%! </Text>
      ) : (
        <Text>Belanja lebih banyak untuk dapat diskon!</Text>
      )}
    </View>
  );
}
