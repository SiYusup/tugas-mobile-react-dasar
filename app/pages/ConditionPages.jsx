import { View } from "react-native";
import CekKelulusan from "../condition/CekKelulusan";
import DiskonKeranjangBelanja from "../condition/DiskonKeranjangBelanja";
import KetersediaanStockProduk from "../condition/KetersediaanStockProduk";
import ModeTampilan from "../condition/ModeTampilan";
import PeringatanCuaca from "../condition/PeringatanCuaca";
import SistemRekomendasiFilm from "../condition/SistemRekomendasiFilm";
import StatusKeaktifanToko from "../condition/StatusKeaktifanToko";
import StatusLoginPengguna from "../condition/StatusLoginPengguna";
import TarifParkirKendaraan from "../condition/TarifParkirKendaraan";
import ValidasiPasswordPendaftaran from "../condition/ValidasiPasswordPendaftaran";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Soal Ke-1</h1>
      <CekKelulusan />
      <h1>Soal Ke-2</h1>
      <PeringatanCuaca />
      <h1>Soal Ke-3</h1>
      <StatusLoginPengguna />
      <h1>Soal Ke-4</h1>
      <DiskonKeranjangBelanja />
      <h1>Soal Ke-5</h1>
      <StatusKeaktifanToko />
      <h1>Soal Ke-6</h1>
      <ModeTampilan />
      <h1>Soal Ke-7</h1>
      <ValidasiPasswordPendaftaran />
      <h1>Soal Ke-8</h1>
      <TarifParkirKendaraan />
      <h1>Soal Ke-9</h1>
      <KetersediaanStockProduk />
      <h1>Soal Ke-10</h1>
      <SistemRekomendasiFilm />
    </View>
  );
}
