// fs is stands for file system used to read and write files in your local system 

/*
1. Import external fs module and read the file contents.
*/
// import an external fs module
const fs = require('fs');

// read file a.txt & b.txt and store its content in contents variable
const contents = fs.readFileSync("a.txt", "utf8") + fs.readFileSync("b.txt", "utf-8");

// print the contents of the file 
console.log(contents); 



