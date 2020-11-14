const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
let a = ayarlar.prefix
let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 let o = await db.fetch(`prefix.${message.guild.id}`)
 if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.RichEmbed().setColor("RED").setDescription(`Bu Komutu Kullanabilmek İçin Mesajları Yönet Yetkisine Sahip Olmalısınız.\nŞuanki Prefix: ${p}`));
  if(args[0] === "ayarla") {if(!args[1]) return message.channel.send(new Discord.RichEmbed().setColor("RED").setDescription(`Bir Prefix Girip Tekrar Dene. \n Şuanki Prefix: ${p}`));
db.set(`prefix.${message.guild.id}`, args[1])
message.channel.send(new Discord.RichEmbed().setColor("GREEN").setDescription(`Prefix Başarıyla ${args[0]} Ayarlandı.\n Şuanki Prefix: ${args[1]}`));}
    if(args[0] === "sıfırla") {
    if(!o) {
       return message.channel.send(new Discord.RichEmbed().setColor("RED").setDescription(`Ayarlanmayan Prefixi Sıfırlayamazsınız. \nŞuanki Prefix: ${p}`));}
    db.delete(`prefix.${message.guild.id}`)       
   return message.channel.send(new Discord.RichEmbed().setColor("GREEN").setDescription(`Prefix Başarıyla Sıfırlandı. Şuanki Prefix: ${a}`));}
  if(!args[0]) return message.channel.send(new Discord.RichEmbed().setColor("YELLOW")        
.setDescription(`Prefix Ayarlamak İçin ${p}prefix ayarla <prefix> / Sıfırlamak İçin ${p}prefix sıfırla \nŞuanki Prefix: ${p}`));
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
  
  exports.help = {
    name: 'prefix',      
    description: 'PREFİX',
    usage: 'prefix <giriceğiniz şey>'
};