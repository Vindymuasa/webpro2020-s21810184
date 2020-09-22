/*
Array
*/

//Deklarasi Array
/*let angka = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(angka);
let buah = ["Mangga", "Apel", "Jeruk"];
console.log(buah);

let arr = ["text", 1, true];
console.log(arr);

let myFunc = function (){
    return "Hello Array";
};


let arr2 = ["text", 1, true, myFunc(), [1, 2, 3, 4,5,]];
//Mengakses element dalam array
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4][2]);

console.log (typeof arr2);
console.log(arr2.length);

//Deklarasi array menggunakan kata kunci new
let buah2 = new Array("Salak", "Jambu", "Melon");
console.log(buah2);
*/

//Manipulasi Array
//1. Menambah isi Array

/*let mhs = [];
mhs[0] = "Jhon";
mhs[1] = "Bob";
mhs[2] = "Jane";

console.log(mhs);

//2. Mengubah isi Array
mhs[1] + "Donny";
console.log(mhs);

//3. Menghapus isi Array
mhs[2] = undefined;
console.log(mhs);
*/

//4.Menampilkan isi Array
//let mhs = ["Jhon", "Bob", "Jane", "Peter", "Mayra"];
//for (let i=0; i < mhs.length; i++) {
//    console.log("Mahasiswa ke-" + (i+1)+ " adalah " +)
//}

//5. Concat
// let buah = ["Mangga", "Apel", "Anggur"];
// let sayur = ["Kangkung", "Bayam", "Buncis"];

//let makanan = buah.concat(sayur);
//console.log(makanan);

//6. Splice dan Slice
//a. Splice

//let buah = ["Pisang","Mangga", "Apel", "Jeruk"];
//buah.splice(2, 0, "Melon", "Semangka");
//console.log(buah.join(" - "));

 //b.Slice
//let buah2 = buah.slice(0, 3);
 //console.log(buah2.join(" - "));

//7. forEach dan map
//a.forEach
// for (let i=0; i < mhs.length; i++) {
    //   console.log("Mahasiswa ke-" + (i+1)+ " adalah " +)
    //
//}
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// let tampilAngka = function (el) {
//    console.log(el);
//  };
angka.forEach(tampilkanAngka);

//b.map
let angka2 = angka.map(function (el){
    return el;
});
console.log(angka2);