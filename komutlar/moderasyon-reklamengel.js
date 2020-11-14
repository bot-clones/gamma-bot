	const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
const code = message.mentions.channels.first() || message.channel
let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix 
const frenzy = args[0]
if (!frenzy) return message.reply(`**Reklam Engel Sistemini Açmak İçin \`${prefix}reklam-engel #kanal veya ${prefix}reklam-engel Aç\` Yazmalsın**`)
 
  if (frenzy == 'aç') { 
  let açıkkapalı = await db.fetch(`reklamEngelFrenzy_${code.id}`)
  if(açıkkapalı) return message.reply(`**Zaten Reklam Engel Bu Kanalda Aktif!**`)
    
db.set(`reklamEngelFrenzy_${code.id}`,'açık')
message.reply(`**Reklam Engel Sistemi Başarıyla Aktif edildi**`)
  }
  
  if (frenzy == 'kapat') {
  let açıkkapalı = await db.fetch(`reklamEngelFrenzy_${code.id}`)
  if(!açıkkapalı) return message.reply(`**Zaten Reklam engel bu kanalda/belirttiğiniz kanalda deaktif!**`)
    
db.delete(`reklamEngelFrenzy_${code.id}`)
message.reply(`**Reklam engel sistemi başarıyla bu kanalda/belirttiğiniz kanalda deaktif edildi!**`)
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'reklam-engel',
  description: 'Slash',
  usage: 'reklam-engel'
}
