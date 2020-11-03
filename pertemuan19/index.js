// Bagian 1
// Nomor 1

const calculateAge = (birthYear) => {
    return 2019 - birthYear;
}
 
const yearUntilRetirement= (object) => {
	const age = calculateAge(object.year);
	const retirement = 60 - age;
   
	if(retirement > 0) {
    	console.log(`${firstName} retired in ${retirement} years`);
	} else {
    	console.log(`${firstName} is already retired.`);
	}
}
yearUntilRetirement({year: 1987, firstName:"John"});


// nomor 2
const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    let total  = 0;
    for(let i=0; i < numbers.length; i++) {
            total = total + numbers[i];
    }
    return total;
}
console.log(addNumber(1,2,3,4,5,6,7));

//nomor3 
const phi = 3.14;
const power = 2;
const radius = 0;
 
const calArea = function (obj) {
  return phi * Math.pow(obj.radius, obj.power);
};
 
const area21 = calculateArea({radius: radius, power: 2 });
const area7 = calculateArea({radius: radius, power: 2 });
 
console.log(`area with 21 radius: ${area21} , and area with 7 radius: ${area7}`;

//nomor 4
const makeAjaxRequest = (url, method) => {
    if(!method){
           method = ‘GET’
    }
    console.log(url, method);
    }
     
    makeAjaxRequest(‘www.google.com’);

//Bagian 2
// Nomor 1 
 const warnaKesukaan = (warna) =>{
     return console.log(`Warna kesukaan saya adalah ${warna}`);
 }
warnaKesukaan("Putih");
//Nomor 2
let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];

let semuaNamaBuah;
namaBuah1 = [...namaBuah1, ...namaBuah2];
console.log(namaBuah1);