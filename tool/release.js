// "release": "npm run build && git add . && git commit -m \"/****** release ******/\" && git push ",

const shell = require("shelljs");

shell.echo("Hello Shell");

if (shell.exec(" test -d '../toddmark.github.io' && echo 'Yes' || echo 'No' ") === "No") {
  shell.echo("dictionary is empty, please clone this url: https://github.com/toddmark/toddmark.github.io");
  shell.exit();
}
shell.exec("npm run build");

shell.cd("../toddmark.github.io");

shell.exec("find * -delete");

shell.cp("-r", "../toddmark.github.io.source/build/*", "../toddmark.github.io");

shell.exec("pwd");
shell.exec(" git add . && git commit -m \"/****** Auto release from release.js ******/\" && git push ");
