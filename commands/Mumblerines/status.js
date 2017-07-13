exports.run = async (client, msg) => {

  const request = require('request');
  const https = require('https');
  const fs = require('fs');

  var download = function(uri, filename, callback) {
    request.head(uri, function(err, res, body) {
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };

  const pubServers = [{key:'1', value:'https://playsquad.online/servers/79.136.73.35/27100/banner_500x100.png'}, 
                      {key:'2', value:'https://playsquad.online/servers/79.136.73.35/27200/banner_500x100.png'},
                      {key:'3', value:'https://playsquad.online/servers/79.136.73.35/10200/banner_500x100.png'}];

  pubServers.forEach(function(item) {
    download(`${item.value}`, `./status/status${item.key}.png`, function() {
      msg.channel.send({
        files: [{
          attachment: `./status/status${item.key}.png`,
          name: `status${item.key}.png`
        }]
      });
    });
  });

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
  description: 'Grabs Mumblerines public server status from playsquad',
  usage: '',
  usageDelim: '',
  type: 'commands',
};
