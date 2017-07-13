exports.run = async (client, msg) => {
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
