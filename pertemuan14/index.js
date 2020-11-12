// Destrukturisasi array

let hari =["senin", "selasa", "rabu"] 
let [hari2, hari3, hari4]= hari;
console.log(hari2);
console.log(hari4);

//untuk menukar antar 2 variable
let hewan1 ="Bebek";
let hewan2 ="Zebra";
[hewan1,hewan2] = [hewan2,hewan1];
console.log(hewan1); //ouput Bebek
console.log(hewan2); //output Zebra



// Destrukturisasi Object

 let student = {
    Nama: "Vindy",
    Umur: 19,
    Fakultas:"Computer Science",
    Jurusan: "Sistem Informasi",
    MhsAktif: true
  };
  let { Nama, Umur, Fakultas, Jurusan, MhsAktif}=student; //destrukturisasi object
  console.log(Nama);
  console.log(Umur);
  console.log(Fakultas);
  console.log(Jurusan);
  console.log(MhsAktif);

// Destrukturisasi objek bertingkat
  let Mahasiswa = {
    name: "Vindy",
    age: 19,
    faculty:"Computer Science",
    Prody: "Sistem Informasi",
    IPpersemester:{
        semester1 : 3.00 ,
        semester2 : 3.32 ,
        semester3 : 3.42 , 
        semester4 : 3.52 ,
    }
  };
 let {
     IPpersemester: {semester4}     
    }=Mahasiswa;
    console.log(semester4);