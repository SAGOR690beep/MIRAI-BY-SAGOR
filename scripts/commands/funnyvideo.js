module.exports.config = {
  name: "sagor1", 
  version: "1.0.0", 
  permission: 0,
  credits: "SaGor",
  description: "Random funny video",
  prefix: true,
  category: "Media", 
  usages: "funny", // Changed from "islam" to "funny" for consistency
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  
  var hi = ["---SAGOR---"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
    "https://i.imgur.com/0Nqkbez.mp4",
    "https://i.imgur.com/8NOCa6Q.mp4",
    "https://i.imgur.com/2f1Ldc4.mp4", 
    "https://i.imgur.com/NIwlzYS.mp4",
    "https://i.imgur.com/2Ex7jc2.mp4",
    "https://i.imgur.com/Bc6fF5c.mp4",
    "https://i.imgur.com/N7N36mP.mp4",
    "https://i.imgur.com/GICmTcH.mp4",
    "https://i.imgur.com/RQPW4J4.mp4",
    "",
    "",
    "",
    "", 
    "", 
    "", 
    "", 
    "", 
  ];
  
  var randomLink = link[Math.floor(Math.random() * link.length)];
  
  var callback = () => {
    api.sendMessage({ body: `「 ${know} 」`, attachment: fs.createReadStream(__dirname + "/cache/15.mp4") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));
  };
  
  return request(encodeURI(randomLink)).pipe(fs.createWriteStream(__dirname + "/cache/15.mp4")).on("close", callback);
};
