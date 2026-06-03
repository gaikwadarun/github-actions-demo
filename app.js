const http = require("http");

http.createServer((req,res)=>{
    res.write("Hello from Docker Container");
    res.end();
}).listen(3000);

console.log("Server Started");