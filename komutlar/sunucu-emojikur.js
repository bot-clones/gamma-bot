const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu komut sunucu sahibine özeldir!')

  if (!args[0]) {
message.channel.send("Lütfen **emojikur bilgi** kullanınız.")
}
  
  if (args[0] === "bilgi") {
    message.channel.send(
      new Discord.RichEmbed()
        .setDescription("")
        .setColor("RANDOM")
        .setFooter(`${message.author.tag} Için Istendi`, client.user.avatarURL)
        .setTimestamp()
        .addField(
          "**__EMOJİKUR HAZIRLIK__**",
          ` Emoji Kurulum Öncesi Mutlaka Bota Yönetici Yetkisi Veriniz.\nSunucunun Emoji Slotunun Boş Olduğundan Emin Olunuz.\nSonraki Aşama Için emojikur kurulum Yazınız.`
        )
    );
  }

  if (args[0] == "kurulum") {
    message.channel.send(
      new Discord.RichEmbed()
        .setDescription("")
        .setColor("RANDOM")
        .setFooter(`${message.author.tag} Için Istendi`, client.user.avatarURL)
        .setTimestamp()
        .addField(
          "**__EMOJİKUR KURULUM AŞAMASI__**",
          ` Emoji Kurulum Öncesi Aşamalar Tamamlandı ise Komutu Giriniz;\n**emojikur başlat** `
        )
    );
  }

  if (args[0] == "başlat")
    message.channel.send(
      `Kurulum Başlatılsın mı? \n**evet** olarak cevaplayınız...\n10 Saniye Sonra Iptal Edilir.`
    );
  message.channel
    .awaitMessages(response => response.content === "evet", {
      max: 1,
      time: 10000,
      errors: ["time"]
    })
    .then(collected => {
      message.channel.send("Kurulum Başlatılıyor..");

      message.guild
        .createEmoji(`https://i.imgyukle.com/2020/05/05/riXHCn.gif`, "tik1")
        .then(tm => {
          message.channel.send("Emoji oluşturuldu");
        })
        .catch(error => {
          message.channel.send("Hata oluştu!\n\n" + error);
        })
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riXY6h.gif`, "tik2")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riXSOx.gif`, "kalp")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riXCRv.png`,
              "budur"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        
        
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riXJyq.png`, "yok")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riXV6P.png`,
              "kapak"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riY38p.gif`, "no1")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riYlEy.gif`, "tik3")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riYtLM.gif`,
              "budur"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riYFqh.gif`,
              "maden"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riYM7n.gif`,
              "alarm"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riY4Gj.gif`,
              "alarm1"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riYfrU.gif`, "pin")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riYwhH.gif`,
              "alkis"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riak7G.gif`,
              "biciku"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riaEIS.gif`, "no2")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riaRGb.png`,
              "satis"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riaV4s.png`, "eyw")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riaJyQ.gif`, "tik4")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riarlc.gif`,
              "hayde"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riaCRR.png`,
              "agabe"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riaSNe.gif`,
              "alarm3"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riaIIq.gif`,
              "teslim"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riaXOy.gif`,
              "money"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riHvuY.gif`, "tik5")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riH2X6.png`, "cat1")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riHwk1.png`,
              "salak"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riHAwG.png`, "lol")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riLC0P.gif`,
              "dance"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riL5Z0.png`,
              "kovboy"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riLNLy.png`,
              "saskincat"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riLmL1.png`, "amen")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riL2bb.png`,
              "patladik"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riNP2y.gif`,
              "dance2"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/riNRmn.png`, "stop")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riNTmG.gif`,
              "dance3"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riO81e.png`,
              "nocat"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riOFxP.png`,
              "rifcat"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riOMpq.png`,
              "bloodguncat"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/rijPxh.png`,
              "eywreyiz"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/rijyK1.png`,
              "coolka"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/rijxDG.png`,
              "assaas"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/rijehj.gif`,
              "dance4"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/rij3lo.png`,
              "saassa"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/rijlEU.png`, "neee")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/rij4Gf.png`,
              "uzgunsad"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/rijwhb.png`, "sadd")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(`https://i.imgyukle.com/2020/05/05/rij0ls.png`, "ne3")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/rijARQ.png`,
              "parabanka"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .createEmoji(
              `https://i.imgyukle.com/2020/05/05/riXP2c.gif`,
              "200iq"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        );
  message.channel.send("Tamamlandı")
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji"],
  permLevel: 0
};

exports.help = {
  name: "emojikur",
  description: "Espri yapar.",
  usage: "emojikur bilgi"
};