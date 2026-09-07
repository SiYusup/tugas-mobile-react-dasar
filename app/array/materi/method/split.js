// Metode split yaitu memecah sebuah string sehingga menjadi sebuah array.
//  Split menerima sebuah parameter berupa karakter yang menjadi separator untuk memecah string.

let biodata = "name:john,doe";
let name = biodata.split(":");
console.log(name); // [ "name", "john,doe"]

let title = ["my", "first", "experience", "as", "programmer"];
let slug = title.join("-");
console.log(slug);
