let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .addField("Blood:", "[Click Here](http://www.wowhead.com/talent-calc/death-knight/blood)")
    .addField("Frost:", "[Click Here](http://www.wowhead.com/talent-calc/death-knight/frost)")
    .addField("Unholy:", "[Click Here](http://www.wowhead.com/talent-calc/death-knight/unholy)")
    .setColor(0xc41f3b)
    .setThumbnail("https://i.imgur.com/S1pc1sW.png")
    .addBlankField(true)
    .addField("Class Discord:", "[Click Here](https://discordapp.com/invite/eEykQwZ)")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up DK info in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "dk"
}