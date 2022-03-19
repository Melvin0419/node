const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result; // value from first.txt
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result; // value from second.txt

    writeFile(
      "./content/result-async.txt",
      `here is the result:${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done");
      }
    );
  });
});
console.log("next");
