const jsonfile = require("jsonfile");
const fs = require("fs");
const file = "/jianguo/Saladict/notebook.json";
jsonfile.readFile(file, function(err, obj) {
  if (err) console.error(err);
  console.log("你现在一共收录了:", Object.keys(obj.words).length, "个单词!");
  const data = `module.exports = ${JSON.stringify(obj)}`;
  fs.writeFile("./build/words.js", data, err => {
    if (err) throw err;
    console.log("Word sync action is successful!");
  });
});
