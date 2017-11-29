const readline = require("readline");
const shell = require("shelljs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

shell.exec("rm -rf build && webpack --config webpack.dll.config.js && webpack --progress --color");

rl.question("是否发布？(n/y)", (answer) => {
  const result = answer === "y";
  if (result) {
    shell.exec("npm run release");
  }
  rl.close();
});