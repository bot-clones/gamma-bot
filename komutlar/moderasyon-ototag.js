const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');               

const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix 
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const yasin = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLACK");

    message.channel.send(yasin);
    return;
  }  
  let miran = args[0]
  if(miran !== "aç" && miran !== "kapat" && miran !== "kanal"){
      message.channel.send(`**Lütfen Bir Tag Belirt.** ${prefix}ototag aç <TAGINIZ>**`)
    return;
  }
  if(miran === "aç"){
   let codeming = args[1] 
    if(!codeming) return message.channel.send(`Yeni Gelenlere Hangi Tagı Vereyim? Örnek Kullanım : ${prefix} ototag aç TEAM`)
    if(codeming.length > 5) return message.channel.send("Yeni Gelenlere Vereceğim Tag 5 Kelimeden Uzun Olamaz.")
    message.channel.send("Yeni Gelenlere Vereceğim Tagı Başarıyla **"+codeming+"** Olarak Ayarladım") 
    db.set(`ototag_${message.guild.id}`, codeming)
    


  }
  if(miran === "kapat"){
    let amil = db.fetch(`ototag_${message.guild.id}`)
    if(!amil) return message.channel.send("**Ototag Sistemi Zaten Kapalı**")
    message.channel.send("**Ototag Sistemini Başarıyla Kapattım**")
    db.delete(`ototag_${message.guild.id}`)
    db.delete(`ototagk_${message.guild.id}`)
 
    }
  
  if(miran === "kanal"){
    let mirancnm = message.mention.channel.first()
    let mete = db.fetch(`ototag_${message.guild.id}`)
    if(!mete) return message.channel.send("**Ototag Kapalıyken Kanal Ayarlayamazsın**")
    let berk = db.fetch(`ototagk_${message.guild.id}`)
    if (berk) {message.channel.send("**Ototag Kanalını Başarıyla**" +mirancnm+ "**Olarak Değiştirdim**")
               db.set(`ototagk_${message.guild.id}`, mirancnm)
               return;
              }
   else {
    message.channel.send("**Kanalı Başarıyla** "+mirancnm+" **Olarak Ayarladım**")
     db.set(`ototagk_${message.guild.id}`, mirancnm)
   }
  }
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ototag',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};
