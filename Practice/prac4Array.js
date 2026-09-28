// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum += val;
// }
// console.log("The sum of the Marks:",sum);
// let average = sum / marks.length;
// console.log("The Average Marks is :",average);

let items = [250,645,300,900,50];
console.log(`The Actual Price of Items ${items}`);
let discount = 10/100;
for(let i = 0; i <items.length;i++){
    let offer = items[i] * discount;
    items[i] = items[i] - offer;
}
console.log(`After 10% discount on the Items price = ${items}`);
