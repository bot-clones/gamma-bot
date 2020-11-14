const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("**Bu Komutu Kullanmaya Yetkin Yok**")
      .setColor("#fffff0")
.setFooter(bot.user.username, bot.user.avatarURL)
    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
let m = args.slice(1).join(" ")
  if (!u) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("**Lütfen Daveti Silinecek Kişiyi Etiketleyiniz**")
        .setColor("#fffff0")
      .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("**Lütfen Silinecek Davet Sayısını Giriniz**")
        .setColor("#fffff0")
      .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
  const embed = new Discord.RichEmbed()
    .setColor("#fffff0")
    .setDescription(`${u} **Adlı Kullanıcıdan** ${m} **Davet Silindi**`)
  .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed);

  db.add(`davet_${message.author.id}_${message.guild.id}`, -m);
};

module.exports.conf = {
  aliases: ["davetsil"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-sil",
  description: "davet-sil",
  usage: "davet-sil"
};
