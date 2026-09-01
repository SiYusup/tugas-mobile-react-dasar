function InvestrigasiBug() {
  /* 
       PENJELASAN ANALISIS BUG (Untuk Jawaban Tugas):
       Kode milik junior developer mengalami "Infinite Looping" (berputar tanpa henti)
       karena nilai variabel 'flag' dikunci di angka 1. Di dalam kurung kurawal while,
       tidak ada perintah untuk menaikkan nilai 'flag' (misalnya flag++). 
       Akibatnya, kondisi (flag < 10) atau (1 < 10) akan selalu bernilai BENAR selamanya,
       sehingga komputer terus-menerus mencetak teks dan membuat aplikasi menjadi macet total (freeze).
    */

  // PERBAIKAN KODE:
  let flag = 1; // Nilai awal dimulai dari 1

  while (flag < 10) {
    console.log("Iterasi ke-" + flag);

    // Kuncinya di sini: Kita tambah 1 setiap kali berputar
    // Supaya angka naik terus dari 1, 2, 3... sampai 9 lalu berhenti di angka 10.
    flag = flag + 1;
  }
}

export default InvestrigasiBug;
