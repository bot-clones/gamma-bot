const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
//  let rol = message.mentions.roles.first() //| message.guild.roles.get(args.join(' '))
 let kanal = message.mentions.channels.first()
 // if (!message.member.hasPermission("ADMINISTRATOR")) {
    /*  const embedlik = new Discord.RichEmbed()
      .setColor("#36393F")
      .setTitle("**Yetkin Yok!**")
      .setDescription("**Bu komutu kullanabilmek için gerekli olan yetkiye sahip değilsin!**")
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embedlik)
      return
    }*/
  //if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Olamaz! `Rolleri Yönet` adlı yetki sende bulunmuyor.')
//  if (!rol) return message.channel.send('Lütfen bir rol etiketlermisin?')
if (!kanal) return message.channel.send('Kayıt Kanalı Etiketle')
   
  db.set(`kayıtk_${message.guild.id}`, kanal.id)
 // db.set(`kayıtk_${message.guild.id}`, kanal)
 
 /*const embed = new Discord.RichEmbed()
 .setColor("GREEN")
// .setAuthor("Kayıt Başarıyla Ayarlandı")
 .addField("Ayarlanan Rol", `**${rol}**`)
 //.addField("Ayarlanan Kanal", `**${kanal}**`)
 //.addField("Ayarlayan", message.author.username + '#' + message.author.discriminator)*/
  message.channel.send(`Başarıyla Kanal Ayarlandı Ayarlanan Kanal ise Bu **${kanal}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'kayıt-kanal',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'kayıt-kanal <#kanal>'
};