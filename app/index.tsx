import { ScrollView, View } from "react-native";
import ConditionPages from "./pages/ConditionPages";
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
      </View>
    </ScrollView>
  );
}
