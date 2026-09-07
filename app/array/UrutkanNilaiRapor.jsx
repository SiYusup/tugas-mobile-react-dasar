import React from "react";
import { View, Text } from "react-native";

const App = () => {
  // Membuat variabel array
  const nilaiUjian = [78, 90, 65, 88, 92, 70];

  // Mencetak semua elemen pada View
  return (
    <View>
      {nilaiUjian.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default App;
