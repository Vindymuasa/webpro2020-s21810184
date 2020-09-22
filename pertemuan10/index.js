// Let, Var, Const

 // let nama = "vindy";
 // let nama = "muasa";

// console.log(nama);

//Scope dalam javascript
//1. Function scope (var)
//2. Block scope

// (function tes() {
//    for (var i=0; i < 10; i++) {
//        console.log(i);
//    }
//})();
// console.log(i);

{
    let i;
    for (i = 0; i < 10; i++) {
        console.log(i);
    }
}
console.log(i);

// Template Literal
const person = {
    firstName: "Vindy",
    lastName: "Muasa",
    age:19,
};

console.log("Hay nama saya " + person.firstName + " " + person.lastName + ". Saya berumur " + person.age + " tahun."
);

console.log (
    `Hallo nama saya ${person.firstName} ${person.lastName} ${person.age}`
);