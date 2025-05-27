const path = require('path');

// 当前文件对象的信息
var pathObj = path.parse(__filename);

console.log(pathObj);

console.log(pathObj.dir);
console.log(pathObj.base);