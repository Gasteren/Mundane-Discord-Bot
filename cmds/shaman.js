let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .addField("Elemental:", "[Click Here](http://www.wowhead.com/talent-calc/shaman/elemental)")
    .addField("Enhancement:", "[Click Here](http://www.wowhead.com/talent-calc/shaman/enhancement)")
    .addField("Restoration:", "[Click Here](http://www.wowhead.com/talent-calc/rogue/restoration)")
    .setColor(0x0070de)
    .setThumbnail("https://i.imgur.com/fmRZQ29.png")
    .addBlankField(true)
    .addField("Class Discord:", "[Click Here](https://discordapp.com/invite/0VcupJEQX0HuE5HH)")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up Shaman info in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "shaman"
}