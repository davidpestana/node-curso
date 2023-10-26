const http = require("http");

const app = require('./app');

const server = http.createServer(app);

server.listen(8080, "0.0.0.0", () => {
  console.log("Escuchando en localhost:8080");
});