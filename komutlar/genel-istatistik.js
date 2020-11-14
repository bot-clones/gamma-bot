const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const seksizaman = moment
    .duration(bot.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.RichEmbed()
    .setColor("fffff0")
    .setFooter("GAMMA BOT BİLGİ", bot.user.avatarURL)
    .addField(
      "<a:kral:760404841812983878> **Botun Sahibi**",
      "<@737779144942944286>#0001"
    )
    .addField(
      "<a:discord:760404065292779532> **Bellek kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField("<a:discord:760404065292779532> **Çalışma süresi**", seksizaman)
    .addField(
      "<a:hyper:760132448247480361> **Kullanıcılar**",
      bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
      true
    )
    .addField(
      "<a:hyper:760132448247480361> **Sunucular**",
      bot.guilds.size.toLocaleString(),
      true
    )
    .addField(
      "<a:hyper:760132448247480361> **Kanallar**",
      bot.channels.size.toLocaleString(),
      true
    )
    .addField(
      "<a:discord:760404065292779532> **Discord.JS sürüm**",
      "v" + Discord.version,
      true
    )
    .addField(
      "<a:discord:760404065292779532> **Node.JS sürüm**",
      `${process.version}`,
      true
    )
    .addField("<a:discord:760404065292779532> **Ping**", bot.ping + " ms", true)
    .addField(
      "<a:discord:760404065292779532> **CPU**",
      `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``
    )
    .addField(
      "<a:discord:760404065292779532> **Bit**",
      `\`${os.arch()}\``,
      true
    )
    .addField(
      "<a:discord:760404065292779532> **İşletim Sistemi**",
      `\`\`${os.platform()}\`\``
    )
    .addField(
      "**<a:hyper:760132448247480361> Bot Davet**",
      " [Davet Et](https://discord.com/oauth2/authorize?client_id=767053928281538580&scope=bot&permissions=8)"
    )
    .addField(
      "**<a:hyper:760132448247480361> Destek Sunucusu**",
      " [Sunucumuza Katıl](https://discord.gg/brmFPeF)"
    )
    .addField(
      "**<a:hyper:760132448247480361> Voteleme sayfası**",
    " [Botu votele]( )"
    )
   .addField("**<a:hyper:760132448247480361> Gamma Website**",
      " [Website](https://gammabot.glitch.me/index.html)"
    );
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botbilgi", ""],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};
