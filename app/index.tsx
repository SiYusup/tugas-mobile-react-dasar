import { ScrollView, View } from "react-native";
import SistemRegistrasiAkun from "./variable/SistemRegistrasiAkun";

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
        <SistemRegistrasiAkun />
      </View>
    </ScrollView>
  );
}
