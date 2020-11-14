const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

const üye = message.mentions.users.first()
if (!üye) return message.channel.send("Kimin Doğum Günü ise Onu Etiketlemen Gerek!")


   const embed = new Discord.RichEmbed()
.setTitle("İYİKİ DOĞDUN DOSTUM")
.setColor("RANDOM")
.setThumbnail("https://cdn.discordapp.com/attachments/687989890175991808/690716208936386570/emote.png")
.setFooter("Happy New Year")
.setTimestamp()
.setDescription(`😚 Yehu Hey \`${üye.username}\` İyikiii Doğdun🤩\n😘Seni Çok Seviyoruz Herzaman Hep Bizimle Ol\n🎂Nice Mutluu Senelere!`)
message.channel.send(embed)
 message.delete()
}
exports.conf = {
  aliases: []
}
exports.help ={
  name: "doğum-günü"
}