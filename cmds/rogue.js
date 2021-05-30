let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .addField("Assassination:", "[Click Here](http://www.wowhead.com/talent-calc/rogue/assassination)")
    .addField("Outlaw:", "[Click Here](http://www.wowhead.com/talent-calc/rogue/outlaw)")
    .addField("Subtlety:", "[Click Here](http://www.wowhead.com/talent-calc/rogue/subtlety)")
    .setColor(0xfff569)
    .setThumbnail("https://i.imgur.com/7Mc0PNC.png")
    .addBlankField(true)
    .addField("Class Discord:", "[Click Here](https://discordapp.com/invite/0h08tydxoNhfDVZf)")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up Rogue info in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "rogue"
}