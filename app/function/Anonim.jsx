export default function App() {
  // Deklarasi anonymous function ke dalam variabel
  const hitungLuasPersegiPanjang = function (panjang, lebar) {
    return panjang * lebar;
  };

  // Memanggil fungsi dengan argumen 5 dan 6
  const hasil = hitungLuasPersegiPanjang(5, 6);

  // Cetak hasil ke console browser
  console.log(hasil);

  return (
    <div>
      <h2>Hasil Hitung Luas Persegi Panjang</h2>
      <p>Panjang x Lebar (5 x 6) = {hasil}</p>
    </div>
  );
}
