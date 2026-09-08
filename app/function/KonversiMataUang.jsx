import { Text, View } from "react-native"; // Sesuaikan import jika menggunakan React Web/Vite

export default function App() {
  // Deklarasi ES6 Arrow Function
  const konversiIDRkeUSD = (rupiah) => {
    return rupiah / 15000;
  };

  // Uji fungsi dengan nilai 300000
  const hasilKonversi = konversiIDRkeUSD(300000);

  // Cetak hasil ke console
  console.log(hasilKonversi); // Output: 20

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Konversi Mata Uang
      </Text>
      <Text>Rp 300.000 = ${hasilKonversi} USD</Text>
    </View>
  );
}
