// Soal 6
// Sistem akademik sekolah ingin memproses nilai total ujian siswa dan mengembalikan status
// kelulusan berbentuk teks keterangan secara otomatis menggunakan percabangan di dalam
// fungsi.
// Tugas: Buat fungsi bernama cekKelulusan(nilaiUjian) yang mengevaluasi nilai: jika
// nilaiUjian >= 75 mengembalikan "Lulus Kompeten", jika di bawah 75
// mengembalikan "Remedial". Uji fungsi dengan nilai 80.

function cekKelulusan(nilai) {
  if (nilai >= 75) {
    return "Lulus kompeten";
  } else {
    return "Remidial";
  }
}

export default function MengitungNilaiTotalSiswa() {
  let result = cekKelulusan(80);
  console.log(result);
}
