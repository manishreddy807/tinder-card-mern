const http = require("http");
const port = 3002 || 5000;

const app = require("./index");

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Hello World app is listening on port ${port} !`)
})