import { ScrollView, View } from "react-native";
import SistemRegistrasiAkun from "./variable/SistemRegistrasiAkun";
import ValidasiNamaPenggunaBaru from "./variable/ValidasiNamaPenggunaBaru";

export default function Index() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: "#f5f5f5",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Soal Pertama</h1>
        <SistemRegistrasiAkun />
        <h1>Soal Kedua</h1>
        <ValidasiNamaPenggunaBaru />
      </View>
    </ScrollView>
  );
}
