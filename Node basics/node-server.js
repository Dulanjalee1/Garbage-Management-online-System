const http = require("http");

//created server
const server = http.createServer((req,res) =>  {
        //Routes
        if(req.url === "/"){
         res.setHeader("Content-Type","text/html");
         res.write("<h2>Home page....</h2>");
         res.end();
        }

        if(req.url === "/about"){
            res.setHeader("Content-Type","text/html");
            res.write("<h2>About page....</h2>");
            res.end();
           }
});

//listning on that server
        server.listen("5000","localHost", () =>  {
            console.log("Server running on port 5000")
        });
//127.0.0.1= this IP adress link with Localhost
//we are using the ports of 5000