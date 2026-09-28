const prompt = require("prompt-sync")();
let userName = prompt("Enter The Full Name: ");
let num=userName.toLowerCase();
let len = num.length;
console.log("The user Name for this :" + "@" + num + len);
