const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  

    
let user = message.mentions.users.first() || client.users.get(args[0])    
  
if(!user) return message.reply("Kimi öpeceğini söylemedin! **^^**")



if(user.bot) return message.reply("Bir bot öpmek mantıklı değil.")
if(user.id === message.author.id) {
  
let buneaq = new Discord.RichEmbed()
  .setTitle("Kendini öptün mü")
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription("Biyolojik olarak imkansız, ama sana bir şey göstereyim.")
  .setFooter('Belkıs ',message.author.avatarURL)
  .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQ9GUqLQGEIuO9A8StDGE5FcJN2w660udwBHVlN_y3y0U3w8oJ') 
  .setTimestamp()
  
  .setColor('RED')    
 message.channel.send(buneaq).then(m => {
 
m.react('♥️') 
m.delete(40000)   
 
 }) 

  return
}
   let random = ["https://media2.giphy.com/media/nyGFcsP0kAobm/giphy.gif","https://media1.tenor.com/images/f03f245e14fdfcacaf06318cdc667a03/tenor.gif?itemid=15111568", "https://i.pinimg.com/originals/f5/34/19/f53419e78c719c313b64378168fa94cc.gif", "https://media1.giphy.com/media/KH1CTZtw1iP3W/source.gif", "https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif"]
  let gif = (random[Math.floor(Math.random() * random.length)])//dcs ekibi
  
let dcs = new Discord.RichEmbed()
  .setTitle("Havada aşk kokusu varmı ne?")
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription('<@!'+message.author.id+'> **den bir öpücük aldı** <@!'+user.id+'> ')
  .setFooter('Belkıs',message.author.avatarURL)
  .setImage(gif) 
  .setTimestamp()
  .setColor('#EF00FE')
message.channel.send(dcs).then(m => {
 
m.react('♥️') 
m.delete(40000)   
 
 })  
  
    
    

  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['öp'], 
  permLevel: 0
};

exports.help = {
  name: 'kiss',
  description: 'taslak', 
  usage: 'kiss'
};