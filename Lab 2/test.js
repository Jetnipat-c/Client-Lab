var net = require("net");
var HOST = "coin.werapun.com";
var PORT = 6969;

var client = new net.Socket();
client.connect(PORT, HOST, () => {
  console.log(`Connect server to: ${HOST}:${PORT}`);
  client.write(`6035512025`);
});

client.on("data", (data) => {
  console.log(`Data from server : ${data}`);
  if (data == "OK") {
    var num = Math.floor(Math.random() * 21).toString();
    client.write(num);
  } else if (data == "WORNG") {
    var num = Math.floor(Math.random() * 21).toString();
    client.write(num);
  } else {
    client.destroy();
  }
});

client.on("close", () => {
  console.log(`Connect close !!`);
});

client.on("error", (err) => {
  console.log(`err !! = ${err}`);
});
