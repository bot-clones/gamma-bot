const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Gamma Eğlence Komutları`, client.user.avatarURL)
.setColor('fffff0')
.setDescription(`<a:hyper:760132448247480361> Gamma botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  

.addField(`__Pixel__`,`<a:setting:763148267659067423> \`${prefix}pixel\` Profil Fotoğrafınızı Pixel Yaparsınız`,true)
.addField(`__Zıt Renk__`,`<a:setting:763148267659067423> \`${prefix}zıtrenk\` Profil Fotoğrafınızı Zıt Renk Yaparsınız`,true)
.addField(`__Rip Efekt__`,`<a:setting:763148267659067423> \`${prefix}rip\` Profil Fotoğrafınızı Rip Efekti Yaparsınız`,true)
.addField(`__Wasted__`,`<a:setting:763148267659067423> \`${prefix}wasted\` Profil Fotoğrafınızı Wasted Efekti Yaparsınız`,true)
.addField(`__Taş Kağıt Makas__`,`<a:setting:763148267659067423> \`${prefix}tkm\` Taş Kağıt Makas Oynarsınız`,true)
.addField(`__Kaç CM__`,`<a:setting:763148267659067423> \`${prefix}kaçcm\` Malafatanın Büyüklüğünü söyler`,true)
.addField(`__Balık Tut__`,`<a:setting:763148267659067423> \`${prefix}balıktut\` Balık Tutarsın`,)
.addField(`__İntihar Et__`,`<a:setting:763148267659067423> \`${prefix}intihar-et\` İntihar Edersin`,true)
.addField(`__Ağla__`,`<a:setting:763148267659067423> \`${prefix}ağla\` Botu Ağlatırsın`,true)
.addField(`__Doğum Günü__`,`<a:setting:763148267659067423> \`${prefix}doğum-günü\` Etiketlediginiz Kişinin Doğum gününü Kutlarsınız`,true)
.addField(`__Aşk Ölçer__`,`<a:setting:763148267659067423> \`${prefix}aşk-ölçer\` Etiketlediğiniz Kişiye Ne kadar Aşık Olduğunuzu Gösterir`,true)
.addField(`__Hediye Ver__`,`<a:setting:763148267659067423> \`${prefix}hediye-ver\` Etiketlediğiniz Kişiye Hediye Verirsiniz`,true)
.addField(`__Hapishane__`,`<a:setting:763148267659067423> \`${prefix}hapishane\` Avatarınıza Hapishane Efekti Ekler`,true)
.addField(`__Öp__`,`<a:setting:763148267659067423> \`${prefix}kiss\` Etiketlediğiniz Kişiyi Öpersiniz`,true)
.addField(`__Bilgilendirme__`,`<a:hyper:760132448247480361> \`${prefix}davet\` | Gamma'yı Sunucunuza Davet Edersiniz\n<a:hyper:760132448247480361> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(``)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["eğlence",""], 
    permLevel: 0
  };
  exports.help = {
    name: 'eglence'
  }; 
  