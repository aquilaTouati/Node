const fs = require("fs");
const path = "./fichier2.txt";

const buff = fs.readFileSync(path);
const content = buff.toString();
let counter = 0;
for (i = 0; i < content.length; i++)
  if (content.str.charAt(i).match(/[a-z]/i)) {
    counter = counter + 1;
  }
console.log("Number of letter =", counter);
