const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = (client, message, args) => {

  //if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Uyarılarını Kaldıracağın Kişiyi Etiketlemen Lazım');
  
  if (db.has(`uyarılar_${user.id}`) === false) return message.reply("**Bu Kullanıcının Hiç Uyarısı Bulunmuyor**")
  
  db.delete(`uyarılar_${user.id}`)
  
  const embed = new Discord.RichEmbed()
  .setColor("Black")
  .setAuthor(`${user.username} - Uyarı Bilgisi`, user.avatarURL)
  .setDescription(`<@${user.id}> Adlı Kullanıcının Başarıyla Uyarıları Kaldırıldı!`)
  message.channel.send({embed})
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["warnd-delete", "uyarı-sil"],
  permLevel: 1,
    kategori: "moderasyon"
};

exports.help = {
  name: 'uyarı-sil',
  category: 'moderasyon',
  description: 'İstediğiniz kişinin uyarılarını kaldırır.',
  usage: 'uyarı-sil <@kullanıcı>'
};