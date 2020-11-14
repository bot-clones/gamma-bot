const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanmaya yetkin yok!`);

  if (!message.member.voiceChannel) {
    return message.channel.send("**Ses Kanalında Olman Lazım**");
  }

  let kullanıcı = message.mentions.members.first();
  if (!kullanıcı) return message.channel.send("**Kullanıcıyı Etiketlemelisin**");

  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);

  if (!member.voiceChannel) return message.channel.send("**Etiketlenen Kullanıcı Bir Ses Kanalında Değil**").then(m => m.delete(5000));

  const voiceChannel = message.member.voiceChannel.id;
  if (!voiceChannel) return;

  member.setVoiceChannel(voiceChannel);

  const voiceChannel1 = message.member.voiceChannel.name;
  let embed = new Discord.RichEmbed()
    .setColor("Black")
    .setDescription(
      message.author +
        " **Tarafından** " +
        kullanıcı +
        " **Kullanıcısı** `" +
        voiceChannel1 +
        "`** Sesli Kanalına Çekildi.**"
    )
    .setFooter(
      `${message.author.tag}`,
      `${message.author.displayAvatarURL}`
    )
    .setTimestamp();
  message.channel.send(embed).then(m => m.delete(5000));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çek"],
  permLevel: 1
};
exports.help = {
  name: "çek",
  description: "çek",
  usage: "çek"
};