import { Text, View } from "react-native-web";

function PenghitungMundurPeluncuranRoket() {
  // 1. Buat array kosong untuk menampung elemen teks yang akan ditampilkan
  const barisTeks = [];

  // 2. Gunakan for-loop menurun (decrement) dari 5 ke 1
  for (let i = 5; i >= 1; i--) {
    barisTeks.push(
      <Text key={`hitung-${i}`} style={{ fontSize: 18, marginBottom: 5 }}>
        {i}
      </Text>,
    );
  }

  // 3. Tambahkan teks akhir setelah perulangan selesai
  barisTeks.push(
    <Text
      key="meluncur"
      style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}
    >
      Roket Meluncur!
    </Text>,
  );

  // 4. Render array yang sudah berisi elemen ke dalam View
  return <View style={{ padding: 20, alignItems: "center" }}>{barisTeks}</View>;
}

// 5. Ekspor komponen sebagai fungsi (tanpa tanda kurung)
export default PenghitungMundurPeluncuranRoket;
