import { Text, View } from "react-native-web";

function SensorParkirOtomatis() {
  const logSensor = [];

  // Inisialisasi variabel awal sesuai instruksi
  let i = 0;

  // Perulangan while-loop dengan kondisi i < 5
  while (i < 5) {
    // Percabangan if (i === 3) untuk mendeteksi kondisi khusus
    if (i === 3) {
      logSensor.push(
        <Text
          key={`sensor-${i}`}
          style={{
            fontSize: 16,
            color: "red",
            fontWeight: "bold",
            marginVertical: 4,
          }}
        >
          🚨 Awas Halangan Dekat!
        </Text>,
      );
    } else {
      // Jalankan iterasi normal untuk angka lainnya
      logSensor.push(
        <Text
          key={`sensor-${i}`}
          style={{ fontSize: 16, color: "gray", marginVertical: 4 }}
        >
          Tahapan Sensor ke-{i}
        </Text>,
      );
    }

    // Increment i++ agar perulangan berjalan normal
    i++;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Status Monitor Sensor Parkir:
      </Text>
      {logSensor}
    </View>
  );
}

export default SensorParkirOtomatis;
