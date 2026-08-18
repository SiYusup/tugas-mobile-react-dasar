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
