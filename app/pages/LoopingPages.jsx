import { View } from "react-native";
import AntreanPengunjungLoketTiketBioskop from "../looping/AntreanPengunjungLoketTiketBioskop";

export default function LoopingPages() {
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
      <AntreanPengunjungLoketTiketBioskop />
    </View>
  );
}
