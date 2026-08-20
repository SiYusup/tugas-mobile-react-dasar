// Open • SiYusup (Usyup) opened about 1 day ago • 0 comments
// Assignees: SiYusup (Usyup)
// Labels: Soal Condition
// Milestone: Soal Seluruh Latihan Dasar React Native

//   ## Mode Tampilan Layar (Dynamic Styling / Theme)

//   Buat variabel boolean isDarkMode. Jika bernilai true, atur warna latar belakang
//   kontainer utama menjadi #121212 (gelap) dan warna teks menjadi putih. Jika false, atur
//   latar belakang menjadi #FFFFFF (terang) dan warna teks menjadi hitam.

// View this issue on GitHub: https://github.com/SiYusup/tugas-mobile-react-dasar/issues/17
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ModeTampilan() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <View
      style={[
        styles.container,
        isDarkMode ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <Text style={isDarkMode ? styles.darkText : styles.lightText}>
        Klik Untuk Mengganti Container Box Sesuai dengan Warnanya
      </Text>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleThemeMode}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {isDarkMode ? "Ubah ke Light Mode" : "Ubah ke Dark Mode"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  lightContainer: {
    backgroundColor: "#FFFFFF",
  },
  darkText: {
    color: "#FFFFFF",
    marginBottom: 10,
  },
  lightText: {
    color: "#000000",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 45,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
