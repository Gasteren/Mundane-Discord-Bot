let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .addField("Holy:", "[Click Here](http://www.wowhead.com/talent-calc/paladin/holy)")
    .addField("Retribution:", "[Click Here](http://www.wowhead.com/talent-calc/paladin/retribution)\n")
    .addField("Protection:", "[Click Here](http://www.wowhead.com/talent-calc/paladin/protection)")
    .setColor(0xf58cba)
    .setThumbnail("https://i.imgur.com/EhjYsMr.png")
    .addBlankField(true)
    .addField("Class Discord:", "[Click Here](https://discordapp.com/invite/hammerofwrath)")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up Paladin info in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "paladin"
}