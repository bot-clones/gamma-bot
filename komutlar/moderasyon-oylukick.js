const Discord  = module.require('discord.js');

const agree    = "✅";
const disagree = "❎";

module.exports.run = async (bot, message, args) => {

  if (message.mentions.users.size === 0){
    return message.channel.send(":x: **| Lütfen Birini Etiketleyiniz!**");
  }

  let kickmember = message.guild.member(message.mentions.users.first());
  if(!kickmember){
    message.channel.send(":x: **| Bu Kullanıcı Geçerli Görmüyor!**");
  }

  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    return message.channel.send(":x: **| Bu Komutu Kullanmak İçin** \`Üyeleri At\` **İznine Sahip Olmalısın!** ").catch(console.error);
  }

  let msg = await message.channel.send(":timer: **| Şimdi Oyla (**\`10\`**) Saniyeniz Var!**");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("**Oylama Tamamlandı!**", "═════════════════════════\n" +
                                          "<a:tik:759830866741690399> **| Toplam Oy (**\`Evet\`**)** ➠ " + `${YES_Count-1}\n` +
                                          "<a:iptal:760154725990531074> **| Toplam Oy (**\`Hayır\`**)** ➠ " + `${NO_Count-1}\n` +
                                          "═════════════════════════\n" +
                                          "**NOT: Tekme Atmak İçin Gerekli Oylar (**\`+3\`**)**\n" +
                                          "═════════════════════════", true)

            .setColor("#fffff0")


  if(YES_Count >= 4 && YES_Count > NO_Count){

    kickmember.kick().then(member => {
      message.reply(`:white_check_mark: **|** ${member.user.username} **Adlı Kullanıcı Başarıyla Oy Kick Sistemi İle Tekmelendi.**`)
    })
  }else{

  }

  message.channel.send("\n" + ":ok_hand: **| Şimdilik Güvende!**");
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oy-kick'],
  permLevel: 0
};

exports.help = {
  name: 'oy-kick',
  description: 'Sunucuda Oy Kick Sistemi İle Birini Sunucudan Atmaya İşe Yarar.',
  usage: 'oy-kick'
};