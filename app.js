// -27
// value is 50
// 2
// 5
// 0.5
// true
// true
// true

// Read a number (using prompt) and display it using alert
var num_1 = prompt("Enter a number");
num_1 = Number(num_1);
alert(num_1);
// Read a number (using prompt) and display it using alert
var num_2 = prompt("Enter a number");
num_2 = Number(num_2);
var sum = num_1 + num_2;
alert(num_2);
if (num_1 > num_2) {
  alert(`ascending order ${num_2} , ${num_1}.`);
  alert(`the larger, ${num_1}`);
  alert("The sum of " + num_1 + " and " + num_2 + " is: " + sum);
} else {
  alert(`ascending order ${num_1} , ${num_2}.`);
  alert(`the larger, ${num_2}`);
  alert(
    "The sum of " + Number(num_1) + " and " + Number(num_2) + " is: " + sum
  );
}
switch (sum) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
  case 5:
    console.log(5);
    break;
  case 6:
    console.log(6);
    break;
  case 7:
    console.log(7);
    break;
  case 8:
    console.log(8);
    break;
  case 9:
    console.log(9);
    break;

  default: console.log("Please Try Again");
    break;
}

for (let index = 0; index <= 5; index++) {
  alert(index);
}

let alertText = "";
for (let i = 0; i <= 5; i++) {
  alertText += i + ", ";
}
alert(alertText);

for (let index = 0; index < 20 ; index++) {
  if (index%3 == 0) {
    console.log(index);
  }
}

let numbers = -1 ;
while (numbers<=0 || numbers>=100) {
  numbers= prompt("Enter a number between 0 and 100");
}
alert(`the number is = ${numbers}`);

let string = "";
while (isNaN(string) == false) {
  string = prompt("please enter a word to reverse");
}
let stringArr = [];
for (let index = 0; index < string.length; index++) {
  stringArr.push(string[index]);
}
console.log(stringArr.reverse());

let num_3 ;
while (isNaN(num_3)) {
  num_3 = prompt("enter a number")
}
var num_0=0 ;
for (let index = 0; index <= num_3; index++) {
  num_0 = num_0 +index;  
}
console.log(num_0);

let num_4 ;
while (isNaN(num_4)) {
  num_4 = prompt("enter a number")
}
var num_0=0 ;
for (let index = 0; index <= num_4; index++) {
  num_0 = num_0 +index;  
}
console.log(num_0/ (++num_4));
