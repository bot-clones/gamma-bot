const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("**Bu Komutu Kullanmaya Yetkin Yok**")
    .setFooter(bot.user.username, bot.user.avatarURL)
      .setColor("#fffff0");

    message.channel.send(embed);
    return;
  }

  let kanal = message.mentions.channels.first();

  if (!kanal) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("**Lütfen Bir Kanal Belirtiniz**")
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("#fffff0")
    );
  }
  const embed = new Discord.RichEmbed()
    .setColor("#fffff0")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`**Davet Kanalı** ${kanal} **Olarak Ayarlandı**`);
  message.channel.send(embed);

  db.set(`davetkanal_${message.guild.id}`, kanal.id);
};

module.exports.conf = {
  aliases: ["davetkanal"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-kanal",
  description: "davet-kanal",
  usage: "davet-kanal"
};
