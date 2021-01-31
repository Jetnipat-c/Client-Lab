let net = require("net");
const HOST = "127.0.0.1";
const PORT = "6969";

net
  .createServer((sock) => {
    console.log(`Connect: ${sock.remoteAddress}:${sock.remotePort}`);
    sock.on("data", (data) => {
      console.log(`Data: ${data}`);
      sock.write(`SAy hi`);
    });
  })
  .listen(PORT, HOST);

console.log(`Server start: ${HOST}:${PORT}`);
