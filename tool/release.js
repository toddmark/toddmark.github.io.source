// "release": "npm run build && git add . && git commit -m \"/****** release ******/\" && git push ",

const shell = require("shelljs");
const moment = require("moment");

shell.echo("Hello Shell");

if (shell.exec(" test -d '../toddmark.github.io' && echo 'Yes' || echo 'No' ") === "No") {
  shell.echo("dictionary is empty, please clone this url: https://github.com/toddmark/toddmark.github.io");
  shell.exit();
}
shell.exec("npm run build");

shell.cd("../toddmark.github.io");

shell.exec("find * -delete");

shell.cp("-r", "../toddmark.github.io.source/build/*", "../toddmark.github.io");

shell.exec(`echo '
# 最近一次发布时间是：${moment().format("YYYY年MM月DD日 HH:mm:ss")} 
--- 
![IMG](https://picsum.photos/888/300) 
' >> README.md`);

shell.exec(`git add . && git commit -m "(｡◕∀◕｡) 发布日期: ${moment().format("YYYY年MM月DD日 HH:mm:ss")}" && git push `);
