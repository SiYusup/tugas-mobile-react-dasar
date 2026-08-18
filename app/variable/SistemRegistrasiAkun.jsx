// Soal 1: Sistem Registrasi Akun Pengguna Baru (Variabel & String)

// Sebagai seorang Mobile App Developer, Anda diminta membuat fitur registrasi awal untuk
// aplikasi toko online. Sistem harus menerima data nama depan, nama belakang, dan status
// keaktifan akun.

// Tugas: Gunakan deklarasi variabel modern ES6 (let dan const) untuk menyimpan data
// firstName = "Budi", lastName = "Santoso", dan status aktif akun isAktif =
// true. Tampilkan data tersebut ke console menggunakan teknik Template Literals agar
// menghasilkan teks output: "Akun atas nama Budi Santoso status aktif:
// true".

export default function SistemRegistrasiAkun() {
  const firstName = "Syekh Yusuf";
  const lastName = "Pramadi";
  let isAktif = true;
  let message;

  if (
    firstName === "Syekh Yusuf" &&
    lastName === "Pramadi" &&
    isAktif === true
  ) {
    console.log(`Akun atas nama ${firstName} masih aktif`);
    message = "Akun anda masih aktif";
  } else {
    message = "Akun anda tidak aktif";
  }

  return (
    <div>
      <h1>Sistem Registrasi Akun</h1>
      <h2>{message}</h2>
    </div>
  );
}
