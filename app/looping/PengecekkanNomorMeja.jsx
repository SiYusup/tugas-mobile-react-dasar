import { Text, View } from "react-native-web";

function PengecekanMejaVIP() {
  const barisTeks = [];

  // For-loop mulai dari 2, kurang dari 10, bertambah 2 di setiap putaran
  for (let deret = 2; deret < 10; deret += 2) {
    // Tampilkan informasi nomor meja VIP ke console
    console.log(`Menyiapkan meja VIP Nomor: ${deret}`);

    // Simpan ke array untuk ditampilkan di layar aplikasi
    barisTeks.push(
      <Text key={`meja-${deret}`} style={{ fontSize: 16, marginBottom: 5 }}>
        Meja VIP Nomor: {deret}
      </Text>,
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Daftar Meja VIP yang Disiapkan:
      </Text>
      {barisTeks}
    </View>
  );
}

export default PengecekanMejaVIP;
