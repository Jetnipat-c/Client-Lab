var net = require("net");
var HOST = "coin.werapun.com";
var PORT = 6969;

var client = new net.Socket();
client.connect(PORT, HOST, () => {
  console.log(`Connect server to: ${HOST}:${PORT}`);
  client.write(`6035512021`);
});

client.on("data", (data) => {
  console.log(`Data from server : ${data}`);
  if (data == "OK") {
    console.log(random());
    client.write(random());
  } else if (data == "WORNG") {
    console.log(random());
    client.write(random());
  } else {
    client.destroy();
  }
});

const random = () => {
  var i = Math.floor(Math.random() * 21);
  var str = i.toString();
  return str;
};

client.on("close", () => {
  console.log(`Connect close !!`);
});

client.on("error", (err) => {
  console.log(`err !! = ${err}`);
});
