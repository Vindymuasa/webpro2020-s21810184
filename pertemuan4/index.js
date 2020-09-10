/* 
    Function
*/

/*function penjumlahanDuaBujurSangkar(a,b) {
    let LuasA = a * a;
    let LuasB = b * b;

    let total = LuasA - LuasB;
    return total;
}
console.log(penjumlahanDuaBujurSangkar(8,3)); */

//Function expression
const penjumlahanDuaBujurSangkar = function (a,b) {
    return a * a + b * b;
};
console.log(penjumlahanDuaBujurSangkar(8,3));
console.log(penjumlahanDuaBujurSangkar(10,5));

// Console.log(tambah{kali(5,2), kali(10,5)});
// function tambah(a,b) {
//    return a +b;
// }
// function kali(a,b) {
// return a * b;   
// }