const db = require("quick.db");
const Discord = require("discord.js");
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || fynx.prefix;
  let eklenti = new Discord.RichEmbed()
    .setAuthor(`Gamma Moderasyon Komutları`, client.user.avatarURL)
    .setColor("fffff0")
    .setDescription(`<a:hyper:760132448247480361> Gamma botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
    .addField(`__Reklam Engel__`,`<a:setting:760129118984732712> \`${prefix}reklam-engel\` Sunucunzuda Reklamları Engeller`,true)
    .addField(`__Reklam Kick__`,`<a:setting:760129118984732712> \`${prefix}reklam-kick\` Sunucunuzda Reklam Yapanları 3 Uyarıda Kickler`,true)
    .addField(`__Ban__`,`<a:setting:760129118984732712> \`${prefix}ban\`  Sunucunuzda Belirtiğiniz Kişiyi Banlar`,true)
    .addField(`__Oylamalı Kick__`,`<a:setting:760129118984732712> \`${prefix}oy-kick\` Sunucunuzda Belirtiniz için Oylamalı Kick işlemi başlatır `,true)
    .addField(`__Kick__`,`<a:setting:760129118984732712> \`${prefix}kick\` Sunucunuzda Belirtiğiniz Kişiyi Kickler `,true)
    .addField(`__Unban__`,`<a:setting:760129118984732712> \`${prefix}unban\`  Sunucunuzda Belirtiğiniz İD'nin Banını Açar`,true)
    .addField(`__Mod Log__`,`<a:setting:760129118984732712> \`${prefix}modlog\` Sunucunuzda Moderasyon Kayıtlarını Tuttar`,true)
    .addField(`__Ban Limit__`,`<a:setting:760129118984732712> \`${prefix}ban-limit\` Ban Limit Yaparsınız`,true)
    .addField(`__Mute__`,`<a:setting:760129118984732712> \`${prefix}mute\` Üyeyi Susturursunuz`,true)
    .addField(`__Sayaç__`,`<a:setting:760129118984732712> \`${prefix}sayaç\` Sunucunuzda Sayaç Tuttar`,true)
    .addField(`__Oto Rol__`,`<a:setting:760129118984732712> \`${prefix}otorol\` Sunucunuz'da ayarladığınız rölü sunucuya girene otomatik verir`,true)
    .addField(`__Uyarı__`,`<a:setting:760129118984732712> \`${prefix}yardımuyarı\` Sunucunuza Gelişmiş Uyarı Sistemi`,true)
    .addField( `__Sayaç Kapat__`,`<a:setting:760129118984732712> \`${prefix}sayaç-kapat\` Sunucunuzun Sayaç Sistemini Kapattır`,true)
    .addField(`__Ban Say__`,`<a:setting:760129118984732712> \`${prefix}bansay \` Sunucunuzdan Kimlerin Banlandığını Görebilirsiniz`,true)
    .addField(`__Yavaş Mod__`,`<a:setting:760129118984732712> \`${prefix}yavaşmod \` Sunucunuzda Berirlenen Sohbete Yazma Delayı Koyabilirsiniz `,true)
    .addField(`__Bilgilendirme__`,`<a:hyper:760132448247480361> \`${prefix}davet\` | Gamma'ı Sunucunuza Davet Edersiniz\n<a:hyper:760132448247480361> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
    .setImage(``);
  message.channel.send(eklenti);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["moderasyon", "ayarlar"],
  permLevel: 0
};
exports.help = {
  name: "moderasyon"
};
