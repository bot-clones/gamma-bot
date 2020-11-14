const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanmak için yeterli izne sahip değilsin.`)

let arguman = args[0];

if (!arguman) return message.channel.send(`**Lütfen** \`aç\` **veya** \`kapat\` **yazın.**`)

if (arguman === "aç") {
if (db.has(`botkoruma_${message.guild.id}`) === true) {
message.channel.send(`**İşlem Başarısız!** Sistem Zaten **Aktif!**`)
}
if (db.has(`botkoruma_${message.guild.id}`) === false) {
db.set(`botkoruma_${message.guild.id}`, "Aktif")

message.channel.send(`Bot Koruma Sistemi Başarıyla **Açıldı!** Sunucunuza Bot Girişi **Kapatılmıştır!**`)
}
}

if (arguman === "kapat") {
if (db.has(`botkoruma_${message.guild.id}`) === true) {
db.delete(`botkoruma_${message.guild.id}`)

message.channel.send(`Bot Koruma Sistemi Başarıyla **Kapatıldı!** Sunucunuza Bot Girişi **Açılmıştır!**`)
}
if (db.has(`botkoruma_${message.guild.id}`) === false) {
message.channel.send(`**İşlem başarısız!** Sistem zaten **aktif!**`)
}
}
}
exports.conf = {
  guildOnly : true,
  enabled : true,
  aliases : ["sunucu-koruma"],
  permLevel : 0
}
exports.help = {
  name : "bot-koruma",
  description : "Sunucuyu botlara karşı koruyan sistem. (Kullanmanızı öneririz)",
  usage : "bot-koruma"
}




