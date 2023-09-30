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
