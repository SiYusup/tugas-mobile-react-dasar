//   ## Soal 7: Sistem Validasi Usia Pengguna (Operator Perbandingan Standar & Strict)

//   Aplikasi game edukasi hanya boleh dimainkan oleh remaja dengan syarat usia minimal 17
//   tahun. Terkadang input data dari form pendaftaran dikirimkan sebagai tipe data string "17".

//   Tugas: Buat variabel inputUsia = "17" (tipe string) dan variabel syaratUsia =
//   17 (tipe number). Lakukan pengecekan menggunakan Strict Equal (===) dan
//   perbandingan >=. Analisis dan jelaskan mengapa inputUsia === syaratUsia
//   menghasilkan nilai false, sementara dengan operator >= bernilai true

export default function SistemValidasiUsiaPengguna() {
  const usia = "17";

  return (
    <div>
      <h2>Menggunakan Strict Equal === {validaiUsiaPengguneSalah(usia)}</h2>
      <p>
        Hal ini terjadi karena pengecekkan tidak hanya valuenya saja tetapi juga
        tipe datanya juga
      </p>
      <h2>
        Menggunakan Compare Higher Equal = {validasiUsiaPenggunaTrue(usia)}
      </h2>
      <p>
        Hal ini menjadi keunikan dalam JS yaitu bentuk angka apapun kalau di
        validasikan dengan non-strict maka akan tetap di anggap angka yaitu bisa
        di sebut Dynamic Type
      </p>
    </div>
  );
}

function validaiUsiaPengguneSalah(usia) {
  const api_usia = usia;
  const syarat_usia = 17;
  let message;

  if (api_usia === syarat_usia) {
    return (message = "Usia anda mencukupi");
  } else {
    return (message = "Usia tidak mencukupi");
  }
}

function validasiUsiaPenggunaTrue(usia) {
  const api_usia = usia;
  const syarat_usia = 17;
  let message;

  if (api_usia >= syarat_usia) {
    return (message = "Usia anda mencukupi");
  } else {
    return (message = "Usia tidak mencukupi");
  }
}
