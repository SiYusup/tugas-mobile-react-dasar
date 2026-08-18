//   ## Soal 5: Konversi Tipe Data Harga Produk dari API (Number & ParseInt)

//   Anda menerima data harga produk dari server API dalam bentuk tipe data String:
//   "150000.50 rupiah". Sebelum dihitung dengan diskon, data tersebut harus diubah dulu
//   ke bentuk angka.

//   Tugas: Buat variabel hargaStr = "150000.50". Konversikan string tersebut
//   menggunakan fungsi Number() atau parseFloat(). Buat juga variabel jumlah stok
//   berupa string "25" yang diubah ke integer menggunakan parseInt(). Kalikan harga
//   dan stok tersebut, lalu cetak hasilnya ke console.

export default function KonversiTipeDataHarga() {
  let api_price = "150000.50";
  let api_stocks = "25";

  const price = parseFloat(api_price);
  const stocks = Number(api_stocks);

  return (
    <div>
      <h3>Sebelum Di Parsing</h3>
      <p>
        values = {api_price}; tipe data = {typeof api_price}
      </p>
      <p>
        values = {api_stocks}; tipe data = {typeof api_stocks}
      </p>
      <h3>Setelah Melakukan Parsing</h3>
      <p>
        Harga Belanja : {price}; tipe data = {typeof price}
      </p>
      <p>
        Total Barang : {stocks}; tipe data = {typeof stocks}
      </p>
    </div>
  );
}
