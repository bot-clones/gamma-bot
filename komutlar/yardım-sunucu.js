const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Gamma Sunucu Komutları`, client.user.avatarURL)
.setColor('fffff0')
.setDescription(`<a:hyper:760132448247480361> Gamma botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Duyuru__`,`<a:partners:755003048471953428> \`${prefix}duyuru\` Sunucunzuda Duyuru Yaparsınız`,true)
.addField(`__Oylama__`,`<a:partners:755003048471953428> \`${prefix}oylama\` Sunucunuzda Oylama Yaparsınız`,true)
.addField(`__Sohbet Aç__`,`<a:partners:755003048471953428> \`${prefix}aç\`  Sunucunuzda Sohbet Açarsınız`,true)
.addField(`__Sohbet Kapat__`,`<a:partners:755003048471953428> \`${prefix}kapat\` Sunucunuzda Sohbet Kapatırsınız `,true)
.addField(`__Sohbet Gizle__`,`<a:partners:755003048471953428> \`${prefix}gizle\`  Sunucunuzda Sohbet Gizlerseiniz`,true)
.addField(`__Çekiliş__`,`<a:partners:755003048471953428> \`${prefix}çekiliş\` Sunucunuzda Çekiliş Yaparsınız`,true)
.addField(`__Hızlı Çek__`,`<a:partners:755003048471953428> \`${prefix}hızlıçek\` Sunucunuzda Hızlı Çekiliş Yaparsınız`,true)
.addField(`__Üye Durum__`,`<a:partners:755003048471953428> \`${prefix}üyedurum\` Sunucunuzun Üye Durumu`,true)
.addField(`__Sunucu Bilgi__`,`<a:partners:755003048471953428> \`${prefix}scbilgi\` Sunucunuzun Bilgileri`,true)
.addField(`__Sunucu Davet__`,`<a:partners:755003048471953428> \`${prefix}sunucudavet \`Sunucunuzun Sınırsız Daveti `,true)
.addField(`__Canlı Destek__`,`<a:partners:755003048471953428> \`${prefix}canlı-destek\` Sunucunuzda Canlı Destek `,true)
.addField(`__Odaya Çek__`,`<a:partners:755003048471953428> \`${prefix}çek\` Sunucunuzda Berirlenen Kişiyi Ses'e Çekersiniz `,true)
.addField(`__Emoji Kur__`,`<a:partners:755003048471953428> \`${prefix}emojikur\` Sunucunuza Bizim Belirlediğimiz 50 Tane Hareketli Hareketsiz Emoji Eklenir`,true)
.addField(`__Ban Sorgu__`,`<a:partners:755003048471953428> \`${prefix}bansorgu\` Kişinin Neden Banlandığını Görürsünüz`,true)
.addField(`__Reklam Tara__`,`<a:partners:755003048471953428> \`${prefix}reklam-tara\` Sunucunuzda Reklamları Tararsınız`,true)
.addField(`__Sesli Sustur__`,`<a:partners:755003048471953428> \`${prefix}sesli-sustur\` Sunucunuzda Süreli Susturursunuz`,true)
.addField(`__Bilgilendirme__`,`<a:hyper:760132448247480361> \`${prefix}davet\` | Gamma'yı Sunucunuza Davet Edersiniz\n<a:hyper:760132448247480361> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(``)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["sunucu","sunucu"], 
    permLevel: 0
  };
  exports.help = {
    name: 'sunucu'
  }; 
  