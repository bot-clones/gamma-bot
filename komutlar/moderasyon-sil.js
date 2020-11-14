const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0x1e90ff)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`temizle` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
	const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0x1e90ff)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Mesajları silebilmem için `Mesajları Yönet` yetkisine sahip olmalıyım.')
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor(0x1e90ff)
    .setTimestamp()
    .addField('Eylem:', 'Sohbet silme')
    .addField('Yetkili:', message.author.username)
    .addField('Sonuç:', `Başarılı`)
    return message.channel.sendEmbed(sohbetsilindi);
    console.log("Sohbet " + message.member + " tarafından silindi!");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'sil',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'sil <temizlenecek mesaj sayısı>'
};
 