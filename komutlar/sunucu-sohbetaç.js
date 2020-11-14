const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let every = message.guild.roles.find(r => r.name === '@everyone')
message.channel.overwritePermissions(every, {
  'SEND_MESSAGES': null,
 
})
 

   message.channel.send(':white_small_square: **=**  **Sohbet kanalı** ``Yazılabilir`` **Haline Getirildi.**\n :white_small_square: **=** **Sohbet Kanalını Kapatmak İçin** ``kapat`` **Yazmanız Gerekmektedir.**');
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aç','a','saç'],
kategori: 'sohbet',
  permLevel: 3
};

exports.help = {
  name: 'sohbet-aç',
  description: 'Sohbetinizi açmaya yarar. Kapatmak için !!k.',
  usage: 'aç'
};