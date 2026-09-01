import { ScrollView, View } from "react-native";
import ContohKomponenDasar from "./contoh/hello";
import SwitchView from "./materi_element/SwitchView";
import ToastAndorid from "./materi_element/ToastAndroid";
import TouchableOpacityView from "./materi_element/TouchableOpacity";
import ConditionPages from "./pages/ConditionPages";
import LoopingPages from "./pages/LoopingPages";
import VariablePages from "./pages/VariablePages";

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
        <VariablePages />
        <ConditionPages />
        <LoopingPages />
        <ContohKomponenDasar />
        <TouchableOpacityView />
        <SwitchView />
        <ToastAndorid />
      </View>
    </ScrollView>
  );
}
