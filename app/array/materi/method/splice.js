// Splice yaitu metode untuk menghapus dan/atau menambahkan nilai elemen pada array. 
// Metode splice bisa menerima parameter sebanyak dua atau lebih parameter.
//  Jika ingin menggunakan splice untuk menghapus elemen pada index tertentu maka digunakan 2 parameter.

let fruits = ["banana", "orange", "grape"];
fruits.splice(1, 0, "watermelon");
console.log(fruits); // [ "banana", "watermelon", "orange", "grape"]
