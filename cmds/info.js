let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .setTitle(`Hmmmm..... I found this`)
    .setDescription(`The information about this server is here:`)
    .addField(`Name:`, message.guild.name, true)
    .addField(`ID:`, message.guild.id, true)
    .addField(`Owner:`, message.guild.owner, true)
    .addField(`Server Region:`, message.guild.region, true)
    .addField(`Channels:`, message.guild.channels.size, true)
    .addField(`Membercount:`, message.guild.memberCount, true)
    .addField(`Server Created At:`, message.guild.createdAt, true)
    .setThumbnail("https://aminoapps.com/static/bower/emojify.js/images/emoji/wrench.png")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up the information about the server in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "info"
}