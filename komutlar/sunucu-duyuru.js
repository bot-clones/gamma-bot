const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`Yazı Yazman Gerek`)).then(m => m.delete(5000));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("Black")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Gamma', client.user.avatarURL)

       .addField(`**Gamma | Duyuru**`, `**${question}**`)).then(function(message) {

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'duyuru <oylamaismi>'
};