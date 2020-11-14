const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  const db = require('quick.db');
  

    
  if (!message.guild.members.get(client.user.id).hasPermission("BAN_MEMBERS")) return message.reply('Hey Dostum Yetkin Yetmiyor')
  

  let user = args[0];
  let reason = args.slice(1).join(' ');
  if (db.has(`log_${message.guild.id}`) === false) return message.reply('Mod Log Kanalı Ayarlanmamış | g.modlog #kanal');
  let modlog = message.guild.channels.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
 if (isNaN(user)) return message.reply('**Lütfen Banını Açmak İstediğiniz Üyeninin ID sini Girin');
  if (reason.length < 1) return message.reply('Lütfen Sebep Giriniz');
 
  
  const embed = new Discord.RichEmbed()
  .setColor("Black")
  .addField('İşlem', 'UnBan')
  .addField('Banı Açılan Üye', `(${user})`)
  .addField('Banı Açan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('Banı Açma Sebebi', "```" + reason + "```")
  modlog.send(embed);
  message.guild.unban(user)
  

  
  const embed2 = new Discord.RichEmbed()
  .setColor("Black")
  .setDescription(`Belirtiğiniz İD'nin Banı Açıldı`)
  message.channel.send(embed2)

  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['unban','yasak-kaldır','yasak-aç','ban-kaldır'],
  permLevel: 3,
  kategori: "moderasyon",
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin sunucudaki banını açar.',
  usage: 'unban <id> <sebep>',
 
};