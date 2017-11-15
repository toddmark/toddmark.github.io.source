// "release": "npm run build && git add . && git commit -m \"/****** release ******/\" && git push ",

const shell = require("shelljs");

shell.echo("Hello Shell");

shell.exec("npm run build");

const dir = shell.cd("../toddmark.github.io");
if (dir.code !== 0) {
  shell.echo("dictionary is empty, please clone this url: https://github.com/toddmark/toddmark.github.io.source");
  shell.exit();
}

shell.exec("pwd");

shell.exec("find * -delete");

shell.cp("-r", "../toddmark.github.io.source/build/*", "../toddmark.github.io");

shell.exec(" git add . && git commit -m \"/****** Auto release from release.js ******/\" && git push ");
