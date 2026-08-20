// Open • SiYusup (Usyup) opened about 2 days ago • 0 comments
// Assignees: SiYusup (Usyup)
// Labels: Soal Condition
// Milestone: Soal Seluruh Latihan Dasar React Native

import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

//   ## Validasi Password Pendaftaran (Logical AND untuk Error Message)

//   Buat variabel string password. Gunakan operator && untuk memunculkan teks error
//   berwarna merah "Password terlalu pendek (minimal 6 karakter)" hanya jika panjang
//   password kurang dari 6 karakter (gunakan .length).

// View this issue on GitHub: https://github.com/SiYusup/tugas-mobile-react-dasar/issues/18

export default function ValidasiPasswordPendaftaran() {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Tolong Masukkan Password Anda</Text>

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Masukkan password"
      />

      {/* Operator && untuk menyembunyikan/menampilkan pesan error */}
      {password.length > 0 && password.length < 6 && (
        <Text style={styles.errorText}>
          Password terlalu pendek (minimal 6 karakter) <br />
          total password masih {password.length}
        </Text>
      )}
      {password.length > 6 && (
        <Text style={styles.successText}>
          Password sudah bagus (minimal 6 karakter) <br />
          total password masih {password.length}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
  },
  errorText: {
    color: "red",
    marginTop: 6,
    fontSize: 14,
  },
  successText: {
    color: "blue",
    marginTop: 6,
    fontSize: 14,
  },
});
