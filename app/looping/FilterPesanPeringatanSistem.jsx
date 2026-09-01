import { Text, View } from "react-native-web";

function SistemKeamananSuhu() {
  const barisPesan = [];

  // For-loop dari i = 0 hingga i <= 6 (total 7 kali iterasi)
  for (let i = 0; i <= 6; i++) {
    // Kondisi IF untuk menyaring iterasi ke-3
    if (i === 3) {
      // Cetak string peringatan khusus
      barisPesan.push(
        <Text
          key={`status-${i}`}
          style={{
            fontSize: 16,
            color: "orange",
            fontWeight: "bold",
            marginVertical: 3,
          }}
        >
          ⚠️ Peringatan: Suhu Mesin Stabil!
        </Text>,
      );
    } else {
      // Selain itu, cukup cetak nilai indeks i-nya
      barisPesan.push(
        <Text
          key={`status-${i}`}
          style={{ fontSize: 16, color: "black", marginVertical: 3 }}
        >
          Siklus Pengecekan Ke-{i}
        </Text>,
      );
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Log Pemantauan Suhu Mesin Pabrik:
      </Text>
      {barisPesan}
    </View>
  );
}

export default SistemKeamananSuhu;
