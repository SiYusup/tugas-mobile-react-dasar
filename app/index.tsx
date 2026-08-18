import { ScrollView, View } from "react-native";
import KalkulatorDiskonBelanjaHarian from "./variable/KalkulatorDiskonBelanjaHarian";
import KodeKuponDiskonOtomatis from "./variable/KodeKuponDiskonOtomatis";
import KonversiTipeDataHarga from "./variable/KonversiTipeDataHarga";
import PengecekkanSyaratBeasiswaSekolah from "./variable/PengecekkanSyaratBeasiswaSekolah";
import ScopeVariableLetdanVar from "./variable/ScopeVariableLetdanVar";
import SensorKataKasar from "./variable/SensorKataKasar";
import SistemRegistrasiAkun from "./variable/SistemRegistrasiAkun";
import SistemValidasiUsiaPengguna from "./variable/SistemValidasiUsiaPengguna";
import ValidasiNamaPenggunaBaru from "./variable/ValidasiNamaPenggunaBaru";
import VerifikasiKemananLoginGanda from "./variable/VerifikasiKeamananLoginGanda";

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
        <h1>Soal Ke-5</h1>
        <KonversiTipeDataHarga />
        <h1>Soal Ke-6</h1>
        <KalkulatorDiskonBelanjaHarian />
        <h1>Soal Ke-7</h1>
        <SistemValidasiUsiaPengguna />
        <h1>Soal Ke-8</h1>
        <VerifikasiKemananLoginGanda />
        <h1>Soal Ke-9</h1>
        <PengecekkanSyaratBeasiswaSekolah />
        <h1>Soal Ke-10</h1>
        <ScopeVariableLetdanVar />
      </View>
    </ScrollView>
  );
}
