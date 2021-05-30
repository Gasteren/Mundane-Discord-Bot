let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .addField("Discipline:", "[Click Here](http://www.wowhead.com/talent-calc/priest/discipline)")
    .addField("Holy:", "[Click Here](http://www.wowhead.com/talent-calc/priest/holy")
    .addField("Shadow:", "[Click Here](http://www.wowhead.com/talent-calc/priest/shadow)")
    .setColor(0xffffff)
    .setThumbnail("https://i.imgur.com/fxxwteu.png")
    .addBlankField(true)
    .addField("Class Discord:", "[Click Here](https://discordapp.com/invite/0f1Ta8lT8xXXEAIY)")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up Priest info in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "priest"
}