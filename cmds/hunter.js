let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .addField("Beast Mastery:", "[Click Here](http://www.wowhead.com/talent-calc/hunter/beast-mastery)")
    .addField("Marksmanship:", "[Click Here](http://www.wowhead.com/talent-calc/hunter/marksmanship)")
    .addField("Survival:", "[Click Here](http://www.wowhead.com/talent-calc/hunter/survival)")
    .setColor(0xabd473)
    .setThumbnail("https://i.imgur.com/BGfSplu.png")
    .addBlankField(true)
    .addField("Class Discord:", "[Click Here](https://discordapp.com/invite/fsgVNTv)")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up Hunter info in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "hunter"
}