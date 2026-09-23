let random = 11;
const prompt = require("prompt-sync")();
let userNum = prompt("Guess the number:");

while(userNum != random){
   userNum = prompt("You enter wrong number, Guess again:");

}
console.log("You Win");