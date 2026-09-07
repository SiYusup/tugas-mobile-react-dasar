// Soal 6: Peremajaan Data Menu Restoran Cepat Saji (.splice())
// Manajer restoran memperbarui daftar menu harian aplikasi pesan-antar makanan. Menu lama 
// pada indeks tertentu dihapus, dan menu baru disisipkan secara presisi.
// Tugas: Diberikan array let menu = ["Burger", "Pizza", "Hotdog", "Pasta"]. Gunakan
// method .splice(2, 1, "Spaghetti", "Salad") untuk menghapus 1 elemen mulai indeks
// ke-2 serta menambahkan dua menu baru tersebut. Tampilkan hasil perubahan array menu

export default function PeremajaanDataMenu() {
    let menu = ['Burger', 'Pizza', 'Hotdog', 'Pasta'];
    const menuBaru = menu.splice(2,1, "Spaghetti", "Salad");

    console.log
}