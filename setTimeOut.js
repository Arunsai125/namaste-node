console.log("Starting the operation...");

var a = 2;
var b = 6;

setTimeout(() => { console.log("Operation completed."); }, 0);

setTimeout(() => { console.log("Operation 2 completed."); }, 3000);

// setTimeout would be called after the call stack is empty though its delay is 0ms

function calculateSum(a, b) {
  return a + b;
}

var c = calculateSum(a, b);
console.log("Sum is: " + c);
