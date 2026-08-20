// Open • SiYusup (Usyup) opened about 1 day ago • 0 comments
// Assignees: SiYusup (Usyup)
// Labels: Soal Condition
// Milestone: Soal Seluruh Latihan Dasar React Native

import { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";

import { Text, TextInput, View } from "react-native-web";

//   ## Status Login Pengguna (If-Else / Ternary Multi-Kondisi)

//   Ketentuan: Buat variabel boolean isLoggedIn dan string namaUser. Jika
//   isLoggedIn bernilai true, tampilkan teks "Halo, [Nama User]!". Jika false,
//   tampilkan tombol/teks "Silakan Login Terlebih Dahulu".

// View this issue on GitHub: https://github.com/SiYusup/tugas-mobile-react-dasar/issues/14

export default function StatusLoginPengguna() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const username_data = "Admin";
  const password_data = "Admin";
  let message = "Anda belum login";

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Password dan Username harus di isi dulu bang jago!");
      return;
    }

    if (username !== username_data && username !== password_data) {
      Alert.alert("Password dan Username anda salah!");
    } else {
      Alert.alert("Anda berhasil login dengan baik");
      setLoggedIn(true);
    }
  };

  if (isLoggedIn === true) {
    message = "Anda sudah login";
  }

  return (
    <View>
      <Text>Sleamat Datang Di Login</Text>
      <Text>username = {username_data}</Text>
      <Text>password = {password_data}</Text>
      <Text>{message}</Text>

      {/* Input Username Dulu Bang Jago */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={(text) => setUsername(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      {/* Input Password Anda Dulu Bang Jago */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={(text) => setPassword(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      {/* Input Button Untuk Kirim */}
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text styles={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
