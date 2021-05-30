let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .addField("Affliction:", "[Click Here](http://www.wowhead.com/talent-calc/warlock/affliction)")
    .addField("Demonology:", "[Click Here](http://www.wowhead.com/talent-calc/warlock/demonology)")
    .addField("Destruction:", "[Click Here](http://www.wowhead.com/talent-calc/warlock/destruction)")
    .setColor(0x9482c9)
    .setThumbnail("https://i.imgur.com/Eb9waHm.png")
    .addBlankField(true)
    .addField("Class Discord:", "[Click Here](https://discordapp.com/invite/0onXDymd9Wpc2CEu)")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up Warlock info in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "warlock"
}