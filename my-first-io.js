const fs = require("fs");
const path = process.argv[2];
fs.readFile(path, (err, buff) => {
  const content = buff.toString();
  console.log(content.split("\n").length - 1);
});
