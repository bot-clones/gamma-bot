var Jimp = require('jimp');

exports.run = (client, message, params) => {
  
  let user = message.mentions.users.first() || message.author
  
      Jimp.read(user.avatarURL, function (err, image){
          image.resize(295, 295)
          if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin Troxy#1331.');
          image.invert().write('./x/zıt-renk.png');
          setTimeout(() => {
            message.channel.send({file: './x/zıt-renk.png'});
          }, 500);
      });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invert"],
  permLevel: 0,
};

exports.help = {
  name: 'zıtrenk',
  description: 'Avatarınızın rengini tersine çevirir.',
  usage: 'zıtrenk veya zıt-renk <@kullanıcı>'
};