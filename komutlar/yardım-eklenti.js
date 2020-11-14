const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Gamma Eklenti Menüsü`, client.user.avatarURL)
.setColor('fffff0')
.setDescription(`<a:hyper:760132448247480361> Gamma botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Kayıt Sistemi__`,`<a:hyper:760132448247480361> \`${prefix}yardımkayıt\` Gelişmiş Yardım Menüsü`,true)
.addField(`__Özel Oda Sistemi__`,`<a:hyper:760132448247480361> \`${prefix}özeloda\` Özel Oda Sistemi`,true)
.addField(`__Sunucu Panel__`,`<a:hyper:760132448247480361> \`${prefix}panel-kur\` Sunucunuzun İstatistiklerini Görürsünüz`,true)
.addField(`__İnvite Sistemi__`,`<a:hyper:760132448247480361> \`${prefix}invite\` Gelişmiş Davet Sistemi`,true)
.addField(`__Bilgilendirme__`,`<a:hyper:760132448247480361> \`${prefix}davet\` | Gamma'yı Sunucunuza Davet Edersiniz\n<a:hyper:760132448247480361> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(``)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["eklenti"], 
    permLevel: 0
  };
  exports.help = {
    name: 'eklenti'
  }; 
  