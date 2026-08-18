// Soal 2: Validasi Nama Pengguna (Username Trim & Length)

// Pihak Quality Assurance menemukan masalah di mana pengguna sering tidak sengaja
// menambahkan spasi kosong di awal atau akhir saat mengetikkan username pada aplikasi
// mobile.

// Tugas: Buat variabel rawUsername = " admin_smkn10 ". Bersihkan spasi tersebut
// menggunakan method string, lalu hitung berapa jumlah karakter dari username yang sudah
// bersih tersebut menggunakan property .length. Tampilkan username baru dan panjang
// karakternya ke console.

export default function ValidasiNamaPenggunaBaru() {
  const rawUsername = " admin_gile";
  const countUsernameBeforeFiltered = rawUsername.length;
  const usernameFiltered = rawUsername.trim();
  const countUsernameAfrerFiltered = usernameFiltered.length;

  return (
    <div>
      <h2>Raw Username / Username Mentah</h2>
      <p>
        \[{rawUsername}\] dengan jumlah huruf {countUsernameBeforeFiltered}
      </p>
      <h2>Username Filtered / Username Setelah Terfilter</h2>
      <p>
        \[{usernameFiltered}\] dengan jumlah huruf {countUsernameAfrerFiltered}
      </p>
    </div>
  );
}
