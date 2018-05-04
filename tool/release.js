// "release": "npm run build && git add . && git commit -m \"/****** release ******/\" && git push ",

const shell = require("shelljs");
const moment = require("moment");

const markdown = `# The Last Release Time: ${moment().format(
  "YYYY-MM-DD HH:mm:ss"
)} ![IMG](https://picsum.photos/888/300)`;

shell.echo("Hello Shell");

if (
  shell.exec(" test -d '../toddmark.github.io' && echo 'Yes' || echo 'No' ") ===
  "No"
) {
  shell.echo(
    "dictionary is empty, please clone this url: https://github.com/toddmark/toddmark.github.io"
  );
  shell.exit();
}

shell.cd("../toddmark.github.io");

shell.exec("git pull");

shell.exec("find * -delete");

shell.cp("-r", "../toddmark.github.io.source/build/*", "../toddmark.github.io");

if (process.platform.indexOf("win") > -1) {
  shell.exec(`echo ${markdown} >> README.md`);
} else {
  shell.exec(`echo "${markdown}" >> README.md`);
}

shell.exec(
  `git add . && git commit -m "(｡◕∀◕｡) 发布日期: ${moment().format(
    "YYYY年MM月DD日 HH:mm:ss"
  )}" && git push `
);
