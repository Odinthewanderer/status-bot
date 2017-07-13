exports.run = async (client, msg) => {

  const https = require('https');
  const fs = require('fs');

  var status1 = fs.createWriteStream("./status/status1.png");
  var status2 = fs.createWriteStream("./status/status2.png");

  var request = https.get("https://playsquad.online/servers/79.136.73.35/27100/banner_500x100.png", function(response) {
    response.pipe(status1);
  }); 

  var request = https.get("https://playsquad.online/servers/79.136.73.35/27200/banner_500x100.png", function(response) {
    response.pipe(status2);
  });

  const channelName = 'status-test';
  let channel = client.channels.find('name', `${channelName}`);

  setTimeout(function() {
    channel.send({
      files: [{
        attachment: './status/status2.png',
        name: 'status2.png'
      },{
        attachment: './status/status1.png',
        name: 'status1.png'
      }]
    });
  }, 400);

};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ['text', 'dm', 'group'],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: 'status',
  description: 'Grabs Mumblerine pub server status from playsquad',
  usage: '',
  usageDelim: '',
  type: 'commands',
};
