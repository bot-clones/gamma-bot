const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Gamma Uyarı Yardım Menüsü`, client.user.avatarURL)
.setColor('fffff0')
.setDescription(`<a:hyper:760132448247480361> Gamma botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel__`,`<a:partners:755003048471953428> \`${prefix}genel\``,true)
.addField(`__Uyar__`,`<a:setting:760129118984732712> \`${prefix}uyar\` Belirtilen Kişiyi Uyarır`,true)
.addField(`__Uyarı Sil__`,`<a:hyper:760132448247480361> \`${prefix}uyarı-sil\` Belirtilen Kişinin Uyarılarını Siler `,true)
.addField(`__Uyarılar__`,`<a:partners:755003048471953428> \`${prefix}uyarılar\` Belirtilen Kişinin Uyarılarını Gösterir`,true)
.addField(`__Bilgilendirme__`,`<a:hyper:760132448247480361> \`${prefix}davet\` | Gamma'yı Sunucunuza Davet Edersiniz\n<a:hyper:760132448247480361> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(``)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardımuyar","helpuyar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardımuyarı'
  }; 
  