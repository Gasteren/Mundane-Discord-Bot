let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .addField("Arcane:", "[Click Here](http://www.wowhead.com/talent-calc/mage/arcane)")
    .addField("Fire", "[Click Here](http://www.wowhead.com/talent-calc/mage/fire)")
    .addField("Frost", "[Click Here](http://www.wowhead.com/talent-calc/mage/frost)")
    .setColor(0x69ccf0)
    .setThumbnail("https://i.imgur.com/k8K9LgV.png")
    .addBlankField(true)
    .addField("Class Discord:", "[Click Here](https://discordapp.com/invite/0gLMHikX2aZ23VdA)")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up Mage info in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "mage" 
}