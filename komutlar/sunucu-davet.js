const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({ maxAge: 0 }).then(invite => {
    let embed = new Discord.RichEmbed()
      .setColor("Black")
      .setDescription(`**Bu Sunucunun Davet Linki**: ${invite}`);
    message.channel.send(embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sunucu-davet",
  description: "Sunucu Davetini Verir.",
  usage: "sunucu-davet"
};
