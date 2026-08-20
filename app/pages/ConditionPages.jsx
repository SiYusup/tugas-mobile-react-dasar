import { View } from "react-native";
import CekKelulusan from "../condition/CekKelulusan";
import PeringatanCuaca from "../condition/PeringatanCuaca";
import StatusLoginPengguna from "../condition/StatusLoginPengguna";

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
      <h1>Soal Ke-5</h1>
      <h1>Soal Ke-6</h1>
      <h1>Soal Ke-7</h1>
      <h1>Soal Ke-8</h1>
      <h1>Soal Ke-9</h1>
      <h1>Soal Ke-10</h1>
    </View>
  );
}
