const fs = require("fs");
module.exports = {
  config:{
  name: "sagor110",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "sagor110",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("তোমাকে দেখিতে")==0 || body.indexOf("তোমাকে দেখিতে")==0 || body.indexOf("tmk dakheta")==0 || body.indexOf("fokir")==0) {
    var msg = {
        body: "তোমারে দেখিতে লাগে ❤️🥀",
        attachment: fs.createReadStream(__dirname + `/SAGOR/fokir.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🩵", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
} 
