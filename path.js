const path = require("path");

console.log(path.sep);

// normalize the path (remove the wrong syntext)
const filePath = path.join("/content//", "sun", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "sub", "text.txt");
console.log(absolute);
