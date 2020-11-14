const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send("Balık Tuttun Balığı Çekiyorsun..").then(message => {
    var espriler = [
      "Sazan Tuttun! :fish:",
      "Köpek Balığı Tuttun İyi Para Eder Sat Sat :D",
      "Uskumru Tuttun! :fish:",
      "Mezgit Tuttun! Havyarıda Var hee ;) :fish:",
      "Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?",
      "Hamsi Tuttun! :fish:",
      "Levrek Tuttun! :fish:",
      "Hiçbirşey Tutamadın Maalesef! :wastebasket:",
      "Alabalık Tuttun! :fish:",
      "Maalesef Balık Oltadan Kaçtı! :wastebasket:",
      "İstavrit Tuttun! :fish:",
      "Gümüş Balığı Tuttun! :wastebasket:",
      "Çukra Tuttun!:fish:",
      "Balon Balığı Tuttun, İğneye Dikkat!",
      "Yılan Balığı Tuttun, Allah Çarpıldık!"
    ];
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    message.edit(`${espri}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["balık-yakala", "balıkyakala", "tut-balık", "balık-tut"],
  permLevel: 0
};

exports.help = {
  name: "balıktut",
  description: "Balık Tutarsın.",
  usage: "balıktut"
};