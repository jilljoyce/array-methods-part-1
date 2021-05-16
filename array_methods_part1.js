//A add "cool"
const addTheWordCool = function(array){
    return array.push('cool');
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

//! works but is not the assignment
// let positiveWords = ["nice", "awesome", "tof"];

// let addTheWordCoolio = function(){
//     return positiveWords.push('coolio');
// };
// console.log("Add coolio:", addTheWordCoolio());

//B
let amountOfElementsInArray = function(array) {
    return array.length;
};
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
// 3

//! works but is not the assignment
// let amountOfElementsInArray = ['appels', 'peren', 'citroenen'];

// console.log(amountOfElementsInArray.length); 
// // 3

//C
const selectBelgiumFromBenelux = function(array) {
    return array[0];
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie" 

//! works but is not the assignment
// let selectBelgiumFromBenelux = ["Belgie", "Nederland", "Luxemburg"];

// console.log(selectBelgiumFromBenelux[0]); 
// // resultaat: "Belgie"

//D
const lastElementInArray = function(array) {
    return array[array.length - 1];
};

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

//! works but is not the assignment
// let lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"];

// console.log(lastElementInArray[lastElementInArray.length - 1]); 
// // resultaat: "Schildpad"

//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
const impeachTrumpSlice = function(array) {
  return presidents.slice(1);  //creates a new array
}
const impeachTrumpSplice = function(array) {
  return presidents.splice(1);  //mutate the origin array
}
  
console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//F
const stringsTogether = function(array) {
    return array.join(' ');
};
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
  //resultaat: "Winc Academy is leuk ;-}"

//G
const combineArrays = function(array1, array2) {
    return array1.concat(array2);
};

console.log(combineArrays([1,2,3], [4,5,6]));
  // resultaat: [1,2,3,4,5,6]