// Soal 9: Rekapitulasi Nilai Sisa
// Sebuah fungsi pengolah data rapor memerlukan fitur penampung sisa daftar nilai ujian yang
// fleksibel dan tidak terbatas jumlahnya menggunakan konsep parameter modern ES6.
// Tugas: Diberikan array nilai let semuaNilai = [95, 88, 90, 85, 78, 82]. Gunakan
// teknik Rest Parameters (...) bersama destructuring untuk memisahkan nilai pertama ke
// variabel nilaiUtama, dan sisa nilai lainnya ditampung ke dalam array sisaNilai. Tampilkan
// kedua variabel tersebut.

export default function PengembanganModulKeranjang() {
  let [NilaiPertama, NilaiKedua, ...NilaiLainnya] = [95, 88, 90, 85, 78, 82];
  console.log(NilaiPertama);
  console.log(NilaiKedua);
  console.log(NilaiLainnya);
}
