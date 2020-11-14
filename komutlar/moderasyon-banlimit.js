const Discord = require('discord.js');

const db = require('quick.db')

 

exports.run = async (client, message, args) => {

 

  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bu komudu kullanmak için yeterli yetkiniz yok.')

  const arg = args[0]

  if (!arg) return message.reply('Limit belirlemek için bir sayı girmelisin, ya da özelliği kapatmak için `g!ban-limit kapat` yazmalısın.')

 

  if (arg == 'kapa' || arg == 'kapat') {

    if (!db.has(`banlimit_${message.guild.id}`)) return message.reply('Bu özellik zaten kapalı.')

    db.delete(`banlimit_${message.guild.id}`)

    message.reply('Özellik başarıyla kapatıldı.')

  }else{

    if (isNaN(Number(arg))) return message.reply('Limiti belirlemek için bir **sayı** girmelisin.')

    db.set(`banlimit_${message.guild.id}`, Number(arg))

    message.reply(`Ban limiti başarıyla \`${arg.toString()}\` olarak belirlendi. Artık sunucudaki yetkililer maksimum ${arg} kere ban atabileceklerdir.`)

  }

 

};

 

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['banlimit'],

  permLevel: 0

};

 

exports.help = {

  name: 'ban-limit',

  description: 'Ban limiti ayarlar',

  usage: 'banlimit'

};

