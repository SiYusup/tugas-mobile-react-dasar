import { Text, View } from "react-native";

const App = () => {
  // Membuat variabel array
  const gudang = [101, 102, 103, 104, 105];

  // Mencetak semua elemen pada View
  return (
    <View>
      {gudang.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default App;
