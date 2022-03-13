/**
 * 插入换行符
 */
let str = "";
process.stdout.write('【插入换行符】\n请输入README中的更新内容字符串（1.xxx。2.xxx。3.xxx。）:\n');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  let chunk = process.stdin.read();
  if (chunk !== null) {
    str = String(chunk);
    str = str.replace(/。/g, "。\n");
    process.stdout.write("\n处理完成: \n\n" + str);
  }
});