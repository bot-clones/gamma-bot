const Discord = require('discord.js');

exports.run = function(client, message, args) {
  let member = message.mentions.members.first() 
if(member){ 
const embed = new Discord.RichEmbed()
.setTitle(`Avatar`)
.setDescription(`[GIF](https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.gif?size=128) - [WEBP](https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.webp?size=128) - [PNG](https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png?size=128) - [JPG](https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.jpg?size=128)`)
.setColor("RANDOM")
.setImage(member.user.avatarURL)
.setFooter(member.user.username, member.user.avatarURL)
message.channel.send(embed)
} else {
const embed = new Discord.RichEmbed()
.setTitle("Avatar")
.setDescription(`[GIF](https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.gif?size=128) - [WEBP](https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.webp?size=128) - [PNG](https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128) - [JPG](https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.jpg?size=128)`)
.setColor("RANDOM")
.setImage(message.author.avatarURL)
message.channel.send(embed)

}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pp"],
  permLevel: 0
};

exports.help = {
  name: 'avatar', 
  description: "Gelişmiş avatar by Lauren#0003",
  usage: 'avatar'
};