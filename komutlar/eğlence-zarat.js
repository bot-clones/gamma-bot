exports.run = function(client, message,args) {

var roman =["1","2","3","4","5","6"]

    let cevap = Math.floor((Math.random() * roman.length));

message.channel.send('Zar Attın ve İşte Çıkan Sonuç **'+roman[cevap]+'   **🎲')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'zarat',
  description: 'zarat',
  usage: 'zarat'
}