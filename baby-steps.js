//   var a = 1;
//   var b = 2;
//   var c = 3;
// }

// findSum (a + b + c);

var sum = 0;
for (i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);
