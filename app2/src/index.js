const http = require('http');
const server = http.createServer(({url, method, headers }, res) => {
console.log(url);
console.log(method);
console.log(headers);
res.setHeader('Content-Type', 'text/html');
res.setHeader('MiCabecera', 'mi propia cabecera');
res.statusCode = 200;
res.write('<html><head>');
res.write('<meta charset="utf-8" />');
res.write('</head><body>');
res.write('<h1>Bienvenidos a mi página web</h1>' + url + method);
res.write('</body></html>');
res.end();
});
server.listen(8080, () => {
console.log('Servidor escuchando en localhost:8080');
});