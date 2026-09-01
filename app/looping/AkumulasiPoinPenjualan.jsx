import { Text, View } from "react-native-web";

function AkumulasiPoinKasir() {
  const barisTeks = [];
  let jumlah = 0; // Variabel akumulator untuk menampung total poin

  // For-loop dengan variabel deret mulai dari 5 turun hingga lebih besar dari 0
  for (let deret = 5; deret > 0; deret--) {
    jumlah += deret; // Menambahkan nilai deret ke dalam variabel jumlah

    // Tampilkan jumlah total saat ini di setiap iterasi
    barisTeks.push(
      <Text key={`iterasi-${deret}`} style={{ fontSize: 16, marginBottom: 5 }}>
        Kupon: {deret} → Total Poin Sementara: {jumlah}
      </Text>,
    );
  }

  return (
    <View style={{ padding: 20, alignItems: "flex-start" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Catatan Akumulasi Poin Harian:
      </Text>
      {barisTeks}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 10,
          color: "green",
        }}
      >
        Total Akhir Poin: {jumlah}
      </Text>
    </View>
  );
}

export default AkumulasiPoinKasir;
