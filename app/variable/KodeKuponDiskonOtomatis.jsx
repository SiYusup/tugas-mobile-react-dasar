//   ## Soal 4: Pembuatan Kode Kupon Diskon Otomatis (String Concatenation & Uppercase)

//   Divisi marketing ingin membuat kode kupon promo otomatis untuk flash sale aplikasi. Kode
//   kupon digabung dari dua bagian string kategori dan diubah menjadi huruf kapital seluruhnya
//   agar terlihat menarik.

//   Tugas: Tulis kode menggunakan variabel dengan const. Bagian pertama string1 =
//   "diskon", bagian kedua string2 = "spesial50". Gabungkan kedua string tersebut
//   menggunakan .concat(), lalu ubah seluruh hurufnya menjadi kapital menggunakan
//   .toUpperCase(). Tampilkan hasil akhirnya.

export default function KodeKuponDiskonOtomatis() {
  const kode_pertama = "diskon";
  const kode_kedua = "spesial5050";

  let kode_match = kode_pertama.concat(kode_kedua);
  let kupon = kode_match.toUpperCase();

  return (
    <div>
      <h2>{kupon}</h2>
    </div>
  );
}
