const Discord = require('discord.js');
exports.run = function(client, message, args) {



    const çekiliş = new Discord.RichEmbed()
    .setTitle("Gamma Bot Çekiliş Sistemi", true)
    .addField("Çekilişi Yapan", `<@${message.author.id}>`, true)
    .addField("Çekilişin Yapıldığı Kanal:", message.channel)
    .addField(`<a:parti:760147766516121601> Çekilişi Kazanan`, `<@${message.guild.members.random().id}>`, true)
     .addField(`<a:parti:760147766516121601> Yedek  Kazanan`, `<@${message.guild.members.random().id}>`, true)
     .addField(`<a:parti:760147766516121601> Yedek  Kazanan 2`, `<@${message.guild.members.random().id}>`, true)
    .setColor("Black")
    .setDescription('')
      message.react('617750006862184493')
    return message.channel.sendEmbed(çekiliş);

    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hızlıçek"],
  kategori: 'çekiliş',
  permLevel: 2
};

exports.help = {
  name: 'hızlıçek',
  description: 'Çekiliş yapar. (klasik)',
  usage: 'hızlıçek'
};  