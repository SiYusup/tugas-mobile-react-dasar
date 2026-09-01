import React from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
export default function ContohKomponenDasar() {
  return (
    <View style={{ padding: 20 }}>
      <Image
        source={require("./logo.jpg")}
        style={{ width: 100, height: 100 }}
      />
      <Text>Selamat datang di React Native</Text>
      <TextInput
        placeholder="Masukkan nama"
        style={{ borderWidth: 1, marginTop: 10 }}
      />
      <Button title="Submit" onPress={() => alert("Data dikirim")} />
    </View>
  );
}
