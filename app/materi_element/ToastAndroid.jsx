import { Button, View } from "react-native";
import Toast from "react-native-toast-message"; // 1. Import library

export default function App() {
  const showToast = () => {
    // Toast standar (muncul di atas secara default)
    Toast.show({
      type: "success",
      text1: "Halo, ini Toast!",
      position: "top",
    });
  };

  const showToastWithGravity = () => {
    // Toast yang bisa diatur posisinya di bawah
    Toast.show({
      type: "info",
      text1: "Toast dengan posisi bawah",
      position: "bottom",
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Tampilkan Toast" onPress={showToast} />
      <Button title="Toast dengan Posisi" onPress={showToastWithGravity} />

      {/* 2. Taruh komponen Toast ini di paling bawah hierarki render */}
      <Toast />
    </View>
  );
}
