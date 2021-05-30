let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .addField("Brewmaster:", "[Click Here](http://www.wowhead.com/talent-calc/monk/brewmaster)")
    .addField("Mistweaver:", "[Click Here](http://www.wowhead.com/talent-calc/monk/mistweaver")
    .addField("Windwalker", "[Click Here](http://www.wowhead.com/talent-calc/monk/windwalker)")
    .setColor(0x00ff96)
    .setThumbnail("https://i.imgur.com/yVqlfc7.png")
    .addBlankField(true)
    .addField("Class Discord:", "[Click Here](https://discordapp.com/invite/0dkfBMAxzTkWj21F)")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up Monk info in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "monk"
}