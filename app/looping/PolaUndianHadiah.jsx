import { Text, View } from "react-native-web";

function PolaUndianHadiah() {
  // Tempat menampung baris teks yang akan ditampilkan di layar HP
  const barisKupon = [];

  // Perulangan for-loop dari angka 1 sampai 10
  for (let kupon = 1; kupon <= 10; kupon++) {
    // Cek apakah nomor kupon habis dibagi 2 menggunakan modulus (%)
    if (kupon % 2 === 0) {
      // Jika habis dibagi 2, masukkan teks Kupon Genap ke dalam array
      barisKupon.push(
        <Text
          key={kupon}
          style={{ fontSize: 16, color: "blue", marginVertical: 2 }}
        >
          Nomor {kupon} adalah Kupon Genap
        </Text>,
      );
    } else {
      // Jika ada sisa bagi, masukkan teks Kupon Ganjil ke dalam array
      barisKupon.push(
        <Text
          key={kupon}
          style={{ fontSize: 16, color: "green", marginVertical: 2 }}
        >
          Nomor {kupon} adalah Kupon Ganjil
        </Text>,
      );
    }
  }

  // Menampilkan semua isi array barisKupon ke dalam layar utama
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        📋 Daftar Hasil Undian Kupon:
      </Text>
      {barisKupon}
    </View>
  );
}

export default PolaUndianHadiah;
