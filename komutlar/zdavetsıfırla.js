const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("**Bu Komutu Kullanmaya Yetkin Yok**")
      .setColor("#fffff0");

    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("**Lütfen Daveti Sıfırlanacak Kişiyi Etiketleyiniz**")
        .setColor("#fffff0")
      .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }

  const embed = new Discord.RichEmbed()
    .setColor("#fffff0")
    .setDescription(
      `${u} **Adlı Kullanıcının Davetlerinin Sıfırlanmasını Onaylıyor Musunuz**`
    )
  .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("**İşlem iptal oldu**"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `**İşlem Onaylandı** ${u} **Adlı Kullanıcının Davetleri Sıfırlandı**`
        );

        db.delete(`davet_${message.author.id}_${message.guild.id}`);
      }
    });
  });
};

module.exports.conf = {
  aliases: ["davetsıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-sıfırla",
  description: "davet-sıfırla",
  usage: "davet-sıfırla"
};
