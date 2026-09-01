import { Text, View } from "react-native-web";

function AntreanBank() {
  const barisAntrean = [];

  // Inisialisasi variabel bendera/lokator awal
  let flag = 1;

  // Perulangan berjalan selama nilai flag kurang dari 10
  while (flag < 10) {
    // Masukkan teks panggilan ke dalam array tampilan
    barisAntrean.push(
      <Text key={`antrean-${flag}`} style={{ fontSize: 16, marginBottom: 5 }}>
        🛎️ Memanggil nasabah antrean ke-{flag}
      </Text>,
    );

    // Increment untuk menaikkan nilai flag agar terhindar dari infinite loop
    flag++;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Status Loket Pelayanan Bank:
      </Text>
      {barisAntrean}
    </View>
  );
}

export default AntreanBank;
