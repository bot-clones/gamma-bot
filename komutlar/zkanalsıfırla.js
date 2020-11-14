const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("**Bu Komutu Kullanmaya Yetkin Yok**")
    .setFooter(bot.user.username, bot.user.avatarURL)
      .setColor("fffff0");

    message.channel.send(embed);
    return;
  }

  let kanal = await db.fetch(`davetkanal_${message.guild.id}`)

  if (!kanal) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("Davet Kanalı Zaten Ayarlanmamış")
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("fffff0")
    );
  }
  db.delete(`davetkanal_${message.guild.id}`)
  const embed = new Discord.RichEmbed()
    .setColor("fffff0")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`Davet Kanalı Başarıyla Sıfırlandı`);
  message.channel.send(embed);
return
  
};

module.exports.conf = {
  aliases: ["davetkanalsıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-kanal-sıfırla",
  description: "davet-kanal-sıfırla",
  usage: "davet-kanal-sıfırla"
};
