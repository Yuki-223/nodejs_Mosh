
const http=require('http');

const server=http.createServer((req, res)=>{
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);
// 现实中并不会这么建立链接 socket 这里依旧是 自定义的函数 connecttion 并不是 是server中定义的 事件名
// server.on('connection', (socket)=>{
//     console.log('New conection...');
// });

console.log('Listening on port 3000...');