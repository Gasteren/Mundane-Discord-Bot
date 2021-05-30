let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .addField("Balance:", "[Click Here](http://www.wowhead.com/talent-calc/druid/balance)")
    .addField("Feral:", "[Click Here](http://www.wowhead.com/talent-calc/druid/feral)")
    .addField("Guardian:", "[Click Here](http://www.wowhead.com/talent-calc/druid/guardian)")
    .addField("Restoration:", "[Click Here](http://www.wowhead.com/talent-calc/druid/restoration)")
    .setColor(0xff7d0a)
    .setThumbnail("https://i.imgur.com/DZrs2lM.png")
    .addBlankField(true)
    .addField("Class Discord:", "[Click Here](https://discordapp.com/invite/8mkvGCV)")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up Druid info in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "druid"
}