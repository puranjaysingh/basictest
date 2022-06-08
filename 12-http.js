const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our homepage");
    }
    else if (req.url === "/about") {
        res.end("This is about us");
    }
    else{ res.end(`<h1>Oops!</h1><p>We can't find the page you're looking for</p><a href="/">Back Home</a>`)}
})

server.listen(5000);