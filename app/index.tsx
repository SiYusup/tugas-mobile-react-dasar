import { ScrollView, View } from "react-native";
import KodeKuponDiskonOtomatis from "./variable/KodeKuponDiskonOtomatis";
import SensorKataKasar from "./variable/SensorKataKasar";
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
        <h1>Soal Ke-1</h1>
        <SistemRegistrasiAkun />
        <h1>Soal Ke-2</h1>
        <ValidasiNamaPenggunaBaru />
        <h1>Soal Ke-3</h1>
        <SensorKataKasar />
        <h1>Soal Ke-4</h1>
        <KodeKuponDiskonOtomatis />
      </View>
    </ScrollView>
  );
}
