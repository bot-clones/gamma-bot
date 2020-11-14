const Discord = require('discord.js');

exports.run = (client, message, params) => {

const hediyeci = message.mentions.users.first() 
if (!hediyeci) return message.channel.send("Kime Hediye Alıyoruz?")

  

      const hediye = new Discord.RichEmbed()
    .setDescription(`${hediyeci} Sana Hediye Alan Biri Var Aramızda 😊`)
    .setColor("RANDOM")
    .setTimestamp()
    .setImage("https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/giphy.gif")
    message.channel.send(hediye)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hediye","h-v","hv"],
  permLevel: 0
};

exports.help = {
  name: 'hediye-ver',
  description: 'Hediye Alırsınız',
  usage: 'hediye-ver'
};