//JavaScript Conditional
// Menggunakan if, else if dan else
let nilaiAndi = 80;

if (nilaiAndi > 75) {
  console.log("SANGAT MEMUASKAN");
} else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
  console.log("MEMUASKAN");
} else {
  console.log("JANGAN MENYERAH, COBA LAGI!");
}

// Switch Case

let job ="teacher";
firstName ="Kasih";

switch (job) {
    case "teacher" :
    case "dokter" :
        console.log(firstName + " is a dokter");
        break;
    case "dosen" :
        console.log(firstName + "is a dosen");
        break;
    case "designer" :
        console.log(firstName + "is a designer");
        break;
    default :
        console.log(firstName + "does something else");
        break;
}

if (job === "dokter") {
    console.log(firstName + " is a dokter");
}else if ( job === "dosen"){
    console.log(firstName + " is a dosen");
}else if (job === "designer"){
    console.log(firstName + " is a designer");
}else {
    console.log(firstName + " nothing ");
}

// Javascript Loop
// For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  
//For/In Loop
const lagu = {
    judul: "Jealous",
    penulisLagu: "Timothy McKenzie, Josh Kear, Natalie Hemby",
    produser: "Labrinth"
};
 for (x in lagu) {
   console.log(x, ':', lagu[x]);
 }

 // For/Of Loop
 // for (x of lagu) menyatakan untuk setiap element x yang ada di variabel lagu maka jalankan console.log(x);.
const buku = ["Game of Thrones: A Song of Ice and Fire",  
   "Harry Potter and The Philosopher's Stone", 
   "Lord of The Rings: The Fellowship of The Ring"
];

for (x of buku) {
  console.log(x);
}

// While Loop
// Let i =1; mendeklarasi variable
// While (i<=10) variabel i bernilai kurang dari atau sama dengan 10, maka jalankan semua kode di dalam {}
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// Do While Loop
let a = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);



 