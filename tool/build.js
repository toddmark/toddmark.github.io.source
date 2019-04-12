const readline = require("readline");
const shell = require("shelljs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const deleteFileArr = shell.find("build/*").filter(function(file) {
  const excludeFile = [".dll.js", "words.js"];
  console.log(excludeFile, file);
  return !excludeFile.includes(file);
});
// console.log(deleteFileArr);
// shell.rm("-rf", deleteFileArr);
// shell.exec("webpack --progress --color");
// shell.cp("./src/recourse/favicon.ico", "./build/");

rl.question("是否发布？(n/y)", answer => {
  const result = answer === "y";
  if (result) {
    shell.exec("npm run release");
  }
  rl.close();
});
