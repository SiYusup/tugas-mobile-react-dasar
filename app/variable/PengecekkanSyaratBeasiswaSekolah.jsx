//   ## Soal 9: Pengecekan Syarat Beasiswa Sekolah (Operator Kondisional OR ||)

//   Tim kesiswaan SMK memberikan kriteria kelayakan beasiswa prestasi. Siswa berhak
//   mendapatkan beasiswa jika nilai akademik rata-rata di atas 85 (isNilaiTinggi = true)
//   ATAU memiliki prestasi juara lomba ekstrakurikuler (isJuaraLomba = true).

//   Tugas: Buat variabel dengan nilai tertentu, lalu terapkan operator OR (||) untuk
//   menentukan status kelayakan beasiswa. Uji program dengan skenario siswa yang tidak
//   juara lomba tetapi nilai akademiknya tinggi.

export default function PengecekkanSyaratBeasiswaSekolah() {
  const nilai_siswa = 90 >= 85;
  const nilai_akademik_siswa = true;
  let message;

  if (nilai_siswa === true || nilai_akademik_siswa === true) {
    message = "Anda dinyatakan mendapatkan beasiswa";
  }

  return (
    <div>
      <p>Pesan Beasiswa Kemendikbud : {message}</p>
    </div>
  );
}
