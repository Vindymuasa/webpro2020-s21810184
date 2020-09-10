/*
    DASAR-DASAR PEMOGRAMAN WE
*/

/*console.log("Hello World,from external file");

/*
    Varibale dan tipe data
    let masih bisa di ganti
    const tidak bisa diganti
    tipe data : string, number, boolean, null, undefined dan object
    loose equality
*/
const firstName = "Jhon";
let age = 20;
age = 21;
const isMerried = true;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMerried);

const info =
"My name is " + firstName + ", I'm " + age + " years old." + isMerried;
console.log(typeof info);

function helloWorld(){
    var hello = "helloWorld";
    console.log(hello);
}
helloWorld();

for (var i = 0; i < 10; i++) {
    console.log(i);
}

/*
    2.Operator
*/

let bilangan = 10;

console.log(bilangan == "10"); // Loose Equality
console.log(bilangan === "10"); // Stritch Equality
