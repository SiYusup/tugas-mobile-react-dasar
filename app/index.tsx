import { ScrollView, View } from "react-native";
import RocketMeluncur from "./minggu_2/soal_perulangan/RocketMeluncur";

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
        {/* <CekKelulusan />
        <PeringatanCuaca /> */}
        {/* <TombolLogin />
        <HargaBelanja />
        <CekToko />
        <CetakAntrian /> */}
        <RocketMeluncur />
      </View>
    </ScrollView>
  );
}
