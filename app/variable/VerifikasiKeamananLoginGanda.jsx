//   ### Soal 8: Verifikasi Keamanan Login Ganda (Operator Kondisional AND &&)

//   Sistem keamanan aplikasi mobile mewajibkan dua syarat agar tombol "Masuk Dashboard" bisa
//   terbuka: pengguna harus sudah memasukkan password yang benar (isPasswordCorrect
//   = true) DAN verifikasi email sudah dikonfirmasi (isEmailVerified = true).

//   Tugas: Buat variabel boolean untuk kedua kondisi tersebut. Gunakan operator kondisional
//   AND (&&) untuk mengevaluasi apakah tombol harus bernilai true atau false, lalu uji
//   skenario jika salah satu nilai diubah menjadi false.

export default function VerifikasiKemananLoginGanda() {
  const password = checkPassword("ucup_gantenk");
  const email = checkEmailVerified("ucup@ucup.ucup");
  let message;

  if (password !== true && email !== true) {
    message = "Anda gagal masuk ke halaman login";
  } else {
    message = "Anda sukses masuk ke halaman login";
  }

  return (
    <div>
      <h3>Apakah Anda Dapat Masuk Kehalaman Login ?</h3>
      <p>{message}</p>
    </div>
  );
}

function checkPassword(password) {
  if (password !== "ucup_gantenk") {
    return false;
  }
  return true;
}

function checkEmailVerified(email) {
  if (email !== "ucup@ucup.ucup") {
    return false;
  }
  return true;
}
