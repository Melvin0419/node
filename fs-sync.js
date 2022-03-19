const { readFileSync, writeFileSync, read } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// create a new file. If it exists, overwrite.
// flag:a, won't overwrite the existing content but add  
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first},${second}`,
  { flag: "a" }
);
