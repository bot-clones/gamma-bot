const db = require("quick.db");
const Discord = require("discord.js");
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || fynx.prefix;
  let eklenti = new Discord.RichEmbed()
    .setAuthor(`Gamma Koruma Menüsü`, client.user.avatarURL)
    .setColor("fffff0")
    .setDescription(
      `<a:hyper:760132448247480361> Gamma botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Rol Koruma__`,
      `<a:Tamir:760132497585078334> \`${prefix}rol-koruma\` Sunucunuzda Rol Silinirse Rölü Tekrar Açar`,
      true
    )
    .addField(
      `__Bot Koruma__`,
      `<a:Tamir:760132497585078334> \`${prefix}bot-koruma\` Sunucunuza Sizden Başka Birisi Bot Ekleyemez`,
      true
    )
    .addField(
      `__Küfür Koruma__`,
      `<a:Tamir:760132497585078334> \`${prefix}küfür-koruma\` Sunucunuzda Kimse Küfür Edemez`,
      true
    )
    .addField(
      `__Reklam Koruma__`,
      `<a:Tamir:760132497585078334> \`${prefix}reklam-engelle\` Sunucunuzda Reklam Yapılamaz`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:hyper:760132448247480361> \`${prefix}davet\` | Gamma'yı Sunucunuza Davet Edersiniz\n<a:hyper:760132448247480361> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `
    )
    .setImage(``);
  message.channel.send(eklenti);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["guard", "koruma"],
  permLevel: 0
};
exports.help = {
  name: "koruma"
};
