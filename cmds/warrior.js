let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .addField("Arms:", "[Click Here](http://www.wowhead.com/talent-calc/warrior/arms)")
    .addField("Fury:", "[Click Here](http://www.wowhead.com/talent-calc/warrior/fury)")
    .addField("Protection:", "[Click Here](http://www.wowhead.com/talent-calc/warrior/protection)")
    .setColor(0xc79c6e)    
    .setThumbnail("https://i.imgur.com/k16IPgP.png")
    .addBlankField(true)
    .addField("Class Discord:", "[Click Here](https://discordapp.com/invite/0pYY7932lTKNhkuJ)")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up Warrior info in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "warrior"
}