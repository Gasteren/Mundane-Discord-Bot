let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed() // sets a embed box to the variable embedhelpmember
    .addField("Havoc:", "[Click Here](http://www.wowhead.com/talent-calc/demon-hunter/havoc)")
    .addField("Vengeance:", "[Click Here](http://www.wowhead.com/talent-calc/demon-hunter/vengeance)")
    .setColor(0xa330c9)
    .setThumbnail("https://i.imgur.com/1mO3L7A.png")
    .addBlankField(true)
    .addField("Class Discord:", "[Click Here](https://discordapp.com/invite/zGGkNGC)")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up DH info in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "dh"
}