
        const db = require("quick.db");
        const Discord = require("discord.js");
        const ayarlar = require("../ayarlar.json");
        
        exports.run = async (client, message, args) => {
          let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "e?";
        
          if (!args[0]) {
            const embed = new Discord.RichEmbed()
              .setColor("Black")
              .setTitle("Rol Koruma Sistemi!")
              .setDescription(
                "**Hatalı Kullanım!| Örnek: !rol-koruma aç / kapat**"
              );
        
            message.channel.send(embed);
            return;
          }
          let rol = await db.fetch(`rolk_${message.guild.id}`);
          if (args[0] == "aç") {
            if (rol) {
              const embed = new Discord.RichEmbed()
                .setColor("Black")
                .setTitle("Rol Koruma sistemi!")
                .setDescription("**Dostum Zaten Rol Koruma Sistemi Aktif!**");
        
              message.channel.send(embed);
              return;
            } else {
              db.set(`rolk_${message.guild.id}`, "acik");
              const embed = new Discord.RichEmbed()
                .setColor("Black")
                .setTitle("Rol Koruma sistemi!")
                .setDescription("**Rol Koruma Sistemi | Aktif Silinen Rolleri Tekrar Açacağım Ve Size Bildiriceğim**");
        
              message.channel.send(embed);
            }
          } else if (args[0] == "kapat") {
            db.delete(`rolk_${message.guild.id}`);
            const embed = new Discord.RichEmbed()
              .setColor("Black")
              .setTitle("Rol Koruma Sistemi")
              .setDescription("**Rol Koruma Sistemi Kapatıldı**");
        
            message.channel.send(embed);
          }
        };
        exports.conf = {
          enabled: true,
          guildOnly: false,
          aliases: ["rol-k"],
          permLevel: 2,
          kategori: "sunucu"
        };
        
        exports.help = {
          name: "rol-koruma",
          description: "Rol koruma sistemini açıp kapatırsınız.",
          usage: "rol-koruma"
        }; 
 
        