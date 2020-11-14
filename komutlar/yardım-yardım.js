const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Gamma Yardım Menüsü`, client.user.avatarURL)
.setColor('#fffff0')
.setDescription(`<a:hyper:760132448247480361> Gamma botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:partners:755003048471953428> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:Tamir:760132497585078334> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:Tamir:760132497585078334> \`${prefix}guard\`  `,true)
.addField(`__Sunucu Komutları__`,`<a:partners:755003048471953428> \`${prefix}sunucu\` `,true)
.addField(`__Eklenti Komutları__`,`<a:setting:760129118984732712> \`${prefix}eklenti\`  `,true)
.addField(`__Eğlence Komutları__`,`<a:eglence:763148267659067423> \`${prefix}eglence\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:hyper:760132448247480361> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:hyper:760132448247480361> \`${prefix}davet\` | Gamma'yı Sunucunuza Davet Edersiniz\n<a:hyper:760132448247480361> \`${prefix}istatistik\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://cdn.discordapp.com/attachments/764579438544945183/773685893915213854/standard-1.gif`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  

