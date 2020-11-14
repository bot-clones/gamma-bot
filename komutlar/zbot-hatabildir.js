const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let bug = args.join(" ").slice(0);
  let user = message.author.username;
  let guild = message.guild.name;
  let guildid = message.guild.id;
  let kanal = message.channel.name;
  let channel = bot.channels.get("75503242095204770"); //bug repot kanal id'i
  let embed = new Discord.RichEmbed()
    .setTitle("Bug Report")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/755026695005667358/755180378351861900/20200913_071037-2.jpg?width=80&height=80"
    )
    .addField("Bug", bug)
    .addField("Report Eden", user, true)
    .addField("Sunucu", guild, true)
    .addField("Sunucu ID", guildid, true)
    .addField("Kanal", kanal, true)
    .setColor("Black");

  message.channel.send(
    "<a:tik:759830866741690399> **| Bug Report Başarı İle İletildi.**"
  );
  channel.send(embed).then(i => i.react("📋"));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "hata-bildir",
  description: "Çalışıp para kazanırsınız.",
  usage: "bug-bildir"
};
