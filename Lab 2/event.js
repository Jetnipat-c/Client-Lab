let events = require("events");
let eventEmiter = new events.EventEmitter();

eventEmiter.on("foo", console.log(` foo event`));
eventEmiter.emit("emit");
