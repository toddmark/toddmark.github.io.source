const readline = require("readline");
const shell = require("shelljs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const file = shell.find("build/*").filter(function(file) {
  return file.indexOf(".dll.js") < 0;
});
console.log(file);
shell.rm("-rf", file);
shell.exec("webpack --progress --color");
shell.cp("./src/recourse/favicon.ico", "./build/");

rl.question("是否发布？(n/y)", answer => {
  const result = answer === "y";
  if (result) {
    shell.exec("npm run release");
  }
  rl.close();
});
