const http = require("http");

http.createServer((req,res)=>{
    res.write("Hello from Docker Container made by devops engineer");
    res.end();
}).listen(3000);

console.log("Server Started");
