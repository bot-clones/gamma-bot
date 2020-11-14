const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let every = message.guild.roles.find(r => r.name === '@everyone')
message.channel.overwritePermissions(every, {
  VIEW_CHANNEL: false,
 
})

  message.channel.send(':white_small_square: **=** **Sohbet Kanalı** ``Görünmez`` **Durumuna Getirildi** \n:white_small_square: **=** **Sohbet Kanalını Görülebilir Yapmak İçin** ``!gizle-kapat`` **Yazmanız Gerekmektedir**');
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sohbet-gizle-aç','s-aç','sohbet-aç','sss'],
kategori: 'sohbet',
  permLevel: 3
};

exports.help = {
  name: 'gizle',
  description: 'Sohbetinizi görünmez yapar. Açmak için !!s-kapat.',
  usage: 'gizle'
};