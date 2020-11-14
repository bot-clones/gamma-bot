const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let every = message.guild.roles.find(r => r.name === '@everyone')
message.channel.overwritePermissions(every, {
  VIEW_CHANNEL: true,
 
})

  message.channel.send(':white_small_square: **=** **Sohbet Kanalı** ``Görünmezden`` **Çıktı** \n:white_small_square: **=** **Sohbet Kanalını Gizli Yapmak İçin** ``!gizle`` **Yazmanız Gerekmektedir**');
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sohbet-gizle-aç','s-aç','sohbet-aç','sss'],
kategori: 'sohbet',
  permLevel: 3
};

exports.help = {
  name: 'gizle-kapat',
  description: 'Sohbetinizi görünmez yapar. Açmak için !!s-kapat.',
  usage: 'gizle-kapat'
};