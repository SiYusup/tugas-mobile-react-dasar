import React from "react";
import { View, Text } from "react-native";

export default function App() {
  // Deklarasi Arrow Function dengan Rest Parameters dan Destructuring
  const formatNamaLengkap = (...rest) => {
    let [depan, belakang] = rest;
    return `${depan} ${belakang}`;
  };

  // Uji fungsi dengan argumen "Siti" dan "Aisyah"
  const namaLengkap = formatNamaLengkap("Siti", "Aisyah");

  // Cetak hasil ke console
  console.log(namaLengkap); // Output: Siti Aisyah

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Profil Pengguna</Text>
      <Text>Nama Lengkap: {namaLengkap}</Text>
    </View>
  );
}
