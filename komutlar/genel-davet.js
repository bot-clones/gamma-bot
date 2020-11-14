const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} Davet Menüsü `)
        .setDescription(`<a:hyper:760132448247480361> **Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=767053928281538580&scope=bot&permissions=8) \n<a:hyper:760132448247480361> **Destek Sunucusu İçin** [TIKLA](https://discord.gg/brmFPeF)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix} Davet Sistemi Kullandı`, message.author.avatarURL)
    .setColor(`Black`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};