var net = require("net");
var HOST = "coin.werapun.com";
var PORT = 6969;

var client = new net.Socket();
client.connect(PORT, HOST, function () {
  console.log("CONNECTED TO: " + HOST + ":" + PORT);
  client.write("6035512021");
});

client.on("data", function (data) {
  console.log("DATA: " + data);
  client.destroy();
});

// Add a 'close' event handler for the client socket
client.on("close", function () {
  console.log("Connection closed");
});

client.on("error", function (err) {
  console.log(`Error : ${err}`);
});
