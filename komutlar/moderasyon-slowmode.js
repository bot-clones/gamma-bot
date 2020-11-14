const Discord = require("discord.js");
exports.run = (client, msg, args) => {
if (msg.channel.type !== "text") return;
if (!msg.channel.permissionsFor(msg.member).has("MANAGE_GUILD")) return msg.channel.send("Bu komutu sadece `MANAGE_GUILD` yetkisine sahip olanlar kullanabilir.");
const limit = args[0] ? args[0] : 0;
if (limit > 120) return msg.channel.send("**Süre limiti maksimum 120 saniye olabilir**");
var request = require('request');
request({
    url: `https://discordapp.com/api/v6/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
});

if (limit == 0) return msg.channel.send("Yavaş Mod Açabilmek İçin g.yavaşmod **<kaç saniye aralıkla yazılsın>**");
return msg.channel.send(`**Üyeler Bundan Sonra **${limit}** Saniye Aralıklarla Mesaj Gönderebilecek.**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slowmode" ,"yavaş mod"],
  permLevel: 0
};

exports.help = {
  name: 'yavaşmod',
  description: 'Sunucuya Mesaj Yazma Süresi Ekler.',
  usage: 'yavaşmod'
};

