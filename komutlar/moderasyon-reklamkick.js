const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json");
exports.run = async (bot, message, args) => {
    let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix 
    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('**Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!**')
  
    if (!args[0]) return message.channel.send('**Sistemi kullanabilmek için** ${prefix}reklam-kick (aç-kapat)')

    if (args[0] == 'aç') {
        db.set(`reklamkick_${message.guild.id}`, 'acik')
          message.channel.send(`**Reklam Kick Sistemi Açıldı. Reklam Yapanlar 3 Uyarıdan Sonra Kicklenecektir**`)

    }
    if (args[0] == 'kapat') {
        db.set(`reklamkick_${message.guild.id}`, 'kapali')
        message.channel.send(`**Reklam kick sistemi kapatıldı**`)

    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reklam-kick'],
    permLevel: 0
};

exports.help = {
    name: 'reklam-kick',
    description: 'Reklam kick sistemini açıp kapatır',
    usage: 'reklam-kick aç/kapat'
};