import React from "react";
import { Text, View } from "react-native-web";

function TabunganSiswa() {
  const barisTabungan = [];

  // Inisialisasi variabel awal sesuai instruksi
  let deret = 4;
  let jumlah = 0; // Variabel akumulator untuk menampung total tabungan

  // Perulangan berjalan selama nilai deret lebih besar dari 0
  while (deret > 0) {
    jumlah += deret; // Menambahkan nilai deret ke dalam variabel jumlah

    // Simpan informasi jumlah tabungan saat ini ke dalam array tampilan
    barisTabungan.push(
      <Text key={`tabungan-${deret}`} style={{ fontSize: 16, marginBottom: 5 }}>
        Hari dengan sisa deret {deret} → Jumlah Tabungan: Rp{jumlah}
      </Text>,
    );

    deret--; // Decrement untuk mengurangi nilai deret agar perulangan berjalan normal
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        💰 Simulasi Pengisian Celengan Siswa:
      </Text>
      {barisTabungan}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 10,
          color: "darkgreen",
        }}
      >
        Total Akhir Tabungan: Rp{jumlah}
      </Text>
    </View>
  );
}

export default TabunganSiswa;
