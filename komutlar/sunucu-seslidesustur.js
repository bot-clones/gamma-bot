const Discord = require('discord.js');
const ms = require("ms");

exports.run = (client, message, args) => {
    if (!message.member.hasPermissions("MUTE_MEMBERS")) return message.channel.send("Bu komutu kullanabilmek için `Üyeleri sustur` yetkisine sahip olmanız gerek.")
    let kullanici = message.mentions.members.first()
    
    let süre = args[1]
    if (!süre) return message.reply("Süre Belirtmelisin.")
    if (!kullanici) return message.channel.send("Kimi susturacağını belirtmedin.")
    kullanici.setMute(true, `Susturan yetkili: ${message.author.tag} - Susturma süresi: ${süre}ms`)
        .then(() =>
            message.channel.send(`${kullanici} \`${süre}\`**ms** Ses Kanallarında Susturuldu.`))
        .catch(console.error);
        setTimeout(() => {

        kullanici.setMute(false,`Süresi Dolduğu için Susturması Kaldırıldı`)
        message.channel.send(`${kullanici} Süresi Dolduğu için mikrafonu açıldı. `)

    }, ms(süre))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sesli-sustur"],
    permLevel: 0
};

exports.help = {
    name: 'sesini-kapat',
    description: 'seslide susturur',
    usage: ""
};