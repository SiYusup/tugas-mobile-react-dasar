// Soal 3: Fitur Sensor Komentar Kasar (Substring & IndexOf)

// Aplikasi forum belajar online memerlukan sistem otomatis untuk mendeteksi keberadaan kata
// kunci terlarang pada kolom komentar pengguna.

// Tugas: Diketahui sebuah string komentar: let komentar = "Wah, aplikasi ini
// sangat lambat dan buruk!". Gunakan method .indexOf() untuk mencari posisi
// indeks kata "buruk". Selain itu, ambil potongan kalimat dari indeks 0 hingga 19
// menggunakan method .substring() dan tampilkan hasilnya di console.

export default function SensorKataKasar() {
  // Filter pesan pertama
  let message_1 = "Wah, aplikasinya burik dan jelek";
  let message_1_check_position_first = message_1.indexOf("burik");
  let message_1_filtered = message_1.substring(
    message_1_check_position_first,
    22,
  );

  // Filter pesan kedua
  let message_2 = "Aplikasi banyak gajelas gini kok bisa masuk ke google play";
  let message_2_check_position_first = message_2.indexOf("gajelas");
  let message_2_filtered = message_2.substring(
    message_2_check_position_first,
    23,
  );

  // Filter pesan ketiga
  let message_3 = "dasar jomok kamu";
  let message_3_check_position_first = message_3.indexOf("jomok");
  let message_3_filtered = message_3.substring(
    message_3_check_position_first,
    11,
  );

  return (
    <div>
      <h2>Sensor Kata Kasar</h2>
      <p>Ini adalah pesan raw pertama nya : {message_1}</p>
      <p>Index keberadaan kata kotor : {message_1_check_position_first}</p>
      <p>Ini adalah pesan hasil filternya : {message_1_filtered}</p>
      <br />
      <p>Ini adalah pesan raw pertama nya : {message_2}</p>
      <p>Index keberadaan kata kotor : {message_2_check_position_first}</p>
      <p>Ini adalah pesan hasil filternya : {message_2_filtered}</p>
      <br />
      <p>Ini adalah pesan raw pertama nya : {message_3}</p>
      <p>Index keberadaan kata kotor : {message_3_check_position_first}</p>
      <p>Ini adalah pesan hasil filternya : {message_3_filtered}</p>
    </div>
  );
}
