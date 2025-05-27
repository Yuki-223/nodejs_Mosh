const fs = require('fs');

// const files = fs.readdirSync('E:\\BaiduNetdiskDownload\\Vedio');
// console.log(files.length);
// // fs.readFile()

// 异步 这里 只有一个有值 err or files

fs.readdir('E:\\BaiduNetdiskDownload\\Vedio', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(files);
});