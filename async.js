const crypto = require("node:crypto");
console.log("Starting async operation...");
var a = 2;
var b = 10;

crypto.pbkdf2("password", "salt", 10000000, 512, "sha512", () => {
  console.log("Async operation completed.");
});

crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
console.log("Sync operation completed.");

function calculateSum(a, b) {
  return a + b;
}

var c = calculateSum(a, b);
console.log("Sum is: " + c);