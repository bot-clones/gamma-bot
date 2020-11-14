const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Gamma Davet Menüsü`, client.user.avatarURL)
.setColor('#fffff0')
.setDescription(`<a:hyper:760132448247480361> Gamma botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Davet Kanal__`,`<a:hyper:760132448247480361> \`${prefix}davet-kanal\` Davet Kanalı Belirlersin`,true)
.addField(`__Davet Ekle__`,`<a:hyper:760132448247480361> \`${prefix}davet-ekle\` Seçilen Kullanıcıya Davet Ekler`,true)
.addField(`__Davet Sil__`,`<a:hyper:760132448247480361> \`${prefix}davet-sil\` Seçilen Kullanıcının Davetlerini Silersiniz`,true)
.addField(`__Davet Sıfırla__`,`<a:hyper:760132448247480361> \`${prefix}davet-sıfırla\` Herkesin Davetini Sıfırlarsınız`,true)
.addField(`__Davet Kanal Sıfırla__`,`<a:hyper:760132448247480361> \`${prefix}davet-kanal-sıfırla\` Davet Kanalını Sıfırlarsınız`,true)
.addField(`__Davetler__`,`<a:hyper:760132448247480361> \`${prefix}davetler\` Davetlerinizi Görürsünüz`,true)
.addField(`__Bilgilendirme__`,`<a:hyper:760132448247480361> \`${prefix}davet\` | Gamma'yı Sunucunuza Davet Edersiniz\n<a:hyper:760132448247480361> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(``)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["invite"], 
    permLevel: 0
  };
  exports.help = {
    name: 'invite'
  }; 
  