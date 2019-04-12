const readline = require("readline");
const shell = require("shelljs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const deleteFileArr = shell.find("build/*").filter(function(file) {
  // 不删除的文件
  const excludeFileArr = [".dll.js", "words.js"];
  return !excludeFileArr.some(function(excludeFile) {
    console.log(file.indexOf(excludeFile), file, excludeFile);
    return file.indexOf(excludeFile) > 0;
  });
});

console.log(deleteFileArr);

shell.rm("-rf", deleteFileArr);
shell.exec("webpack --progress --color");
shell.cp("./src/recourse/favicon.ico", "./build/");

rl.question("是否发布？(n/y)", answer => {
  const result = answer === "y";
  if (result) {
    shell.exec("npm run release");
  }
  rl.close();
});
