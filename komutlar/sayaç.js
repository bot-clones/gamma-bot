const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("Black")
    .setFooter(bot.user.username, bot.user.avatarURL)

    message.channel.send(embed);
    return;
  }

  let hedef = args[0];
  let kanal = message.mentions.channels.first();
  if (!hedef) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`**Lütfen Bir Hedef Belirtiniz**`)
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("Black")
    );
  }
  
  if(hedef < message.guild.memberCount){
        return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`**Bu Hedefi Zaten Aşmışsınız**`)
          .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("Black")
    );
  }
  if (!kanal) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Lütfen Bir Kanal Belirtiniz**`)
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("Black")
    );
  }
  const embed = new Discord.RichEmbed()
    .setColor("Black")
    .setDescription(
      `Sayaç Kanalı; ${kanal}\nHedefi; ${hedef} Olarak Ayarlandı!`
    )
  .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed);

  db.set(`sayaçhedef_${message.guild.id}`, hedef);
  db.set(`sayaçkanal_${message.guild.id}`, kanal.id);
};

module.exports.conf = {
  aliases: ["sayaç-ayarla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "sayaç",
  description: "sayaç",
  usage: "sayaç"
};
