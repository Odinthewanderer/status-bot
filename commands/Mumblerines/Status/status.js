exports.run = async (client, msg, [arg]) => {
  // Declare required libraries
  const request = require('request');
  const fs = require('fs');

  // Declare variable public servers (dictionary)
  let pubServers = [];

  // Switch statement that looks at the OPTIONAL argument arg and fills
  // the variable pubServers according to those arguments.
  switch (arg) {
    case undefined:
      pubServers = [{ key: '1', value: 'https://playsquad.online/servers/79.136.73.35/27100/banner_500x100.png' },
        { key: '2', value: 'https://playsquad.online/servers/79.136.73.35/27200/banner_500x100.png' }];
      break;
    case '1':
      pubServers = [{ key: '1', value: 'https://playsquad.online/servers/79.136.73.35/27100/banner_500x100.png' }];
      break;
    case '2':
      pubServers = [{ key: '2', value: 'https://playsquad.online/servers/79.136.73.35/27200/banner_500x100.png' }];
      break;
    case 'all':
      pubServers = [{ key: '1', value: 'https://playsquad.online/servers/79.136.73.35/27100/banner_500x100.png' },
        { key: '2', value: 'https://playsquad.online/servers/79.136.73.35/27200/banner_500x100.png' },
        { key: '3', value: 'https://playsquad.online/servers/79.136.73.35/10200/banner_500x100.png' }];
      break;
  }

  // Declares the results of a request callback function
  const download = function (uri, filename, callback) {
    request.head (uri, function(err, res, body) {
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };

  // Examines the dictionary pubServers and loops through each item inside that dictionary,
  // retrieves the image file for it (and saves it to /status/*. And then pushes it to the
  // requested channel.
  pubServers.forEach(item => {
    download(`${item.value}`, `./status/status${item.key}.png`, function () {
      msg.channel.send({
        files: [{
          attachment: `./status/status${item.key}.png`,
          name: `status${item.key}.png`,
        },]
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
  description: 'Grabs the status for Mumblerines Squad server(s)',
  usage: '[1|2|all]',
  usageDelim: '',
  type: 'commands',
};
