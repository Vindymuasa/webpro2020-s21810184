// Arrow function
// Kelebihan menggunakan arrow function adalah penulisan fungsi menjadi lebih singkat dan lebih mudah dibaca.

// Fungsi dengan parameter
    const operasiPenjumlahan = (bilangan1, bilangan2) => {
    const hasil =  bilangan1 + bilangan2;
    return hasil;
};
  console.log(operasiPenjumlahan(3, 4)); 
  
// fungsi yang tidak memiliki parameter
const namaJenisAnjing = () => {
   const anjing = ["Pug", "Bulldog", "Poodle"];
   return anjing[Math.floor(Math.random()*(anjing.length))];
  }
    console.log(namaJenisAnjing()); 

// Implicit Return Value adalah suatu kondisi dimana sebuah fungsi langsung mengembalikan nilai tanpa ada deklarasi variabel atau operasi lainnya di dalamnya.
  function greeting(nama) {
       return `Hallo ${nama}`;
   } 
    console.log(greeting('Vindy'));
// Fungsi yang tidak memiliki parameter syntax arrow function untuk implicit return value adalah sebagai berikut:
 const greetingN = (nama) => `Hallo ${nama}`;
 console.log(greetingN('Vindy'));

// Exercise
function yearUntilRetirement(year, firstName)  {
    var age = 28;
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log (firstName + " retired in " + retirement + " years ");
    } else {
        console.log(firstName + "is already retired.");
    }
}

// ES6
const yearUntilRetirementEs6 = (year, firstName) => {
    const age = 28;
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retired in ${retirement} years`);
    } else {
        console.log (`${firstName} is already retired`);
    }
}
yearUntilRetirementEs6(2020, "Vindy");