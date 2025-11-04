const http = require("http");
const server = http.createServer(function(req,res){
    if(req.url === '/secretData') res.end("There is no secret data to be shared as this is a scrap project !");
    else res.end("Hello World !");
});

server.listen(3000);
