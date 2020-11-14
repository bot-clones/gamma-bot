
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Gamma Genel Komutlar`, client.user.avatarURL)
.setColor('fffff0')
.setDescription(`<a:hyper:760132448247480361> Gamma botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Davet__`,`<a:setting:760129118984732712> \`${prefix}davet\` Botumuzun Davet Linkini Alıp Davet Edebilirsiniz`,true)
.addField(`__Hata Bildir__`,`<a:setting:760129118984732712> \`${prefix}hata-bildir\` Botumuzun Hatalarını Bildirebilirsiniz`,true)
.addField(`__Bot Bilgi__`,`<a:setting:760129118984732712> \`${prefix}istatistik\` Botumuzun İstatistiksel Bilgileri`,true)
.addField(`__Korona Bilgi__`,`<a:setting:760129118984732712> \`${prefix}korona\` Korona İstatistiklerini Görebilirsiniz`,true)
.addField(`__Avatar__`,`<a:setting:760129118984732712> \`${prefix}avatar\` Profil Fotoğrafınızı Görebilirsiniz`,true)
.addField(`__Bilgilendirme__`,`<a:hyper:760132448247480361> \`${prefix}davet\` | Gamma'yı Sunucunuza Davet Edersiniz\n<a:hyper:760132448247480361> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(``)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["genel"], 
    permLevel: 0
  };
  exports.help = {
    name: 'genel'
  }; 
  