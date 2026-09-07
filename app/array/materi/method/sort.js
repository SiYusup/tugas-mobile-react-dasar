// Sort adalah metode untuk mengurutkan nilai pada array.
//  Secara otomatis, sort akan mengurutkan secara ascending (dari rendah ke tinggi)
//  dan diurutkan berdasarkan unicode dari karakter.
//  Urutan unicode artinya ada karakter yang secara nilai lebih besar dibandingkan dengan karakter yang lainnya.
//  contohnya adalah karakter “b” akan lebih besar daripada “a”, karakter “c” lebih besar daripada karakter “b”, dst. 

let animals = ["kera", "gajah", "musang"] 
animals.sort()
console.log(animals) // ["gajah", "kera", "musang"] 