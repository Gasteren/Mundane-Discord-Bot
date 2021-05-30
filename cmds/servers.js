let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .setTitle("Mundane Servers")
    .setDescription(`I am in ${bot.guilds.size} servers, with ${bot.users.size} users.`)
    .setColor(0x4286f4)
    .setThumbnail("https://aminoapps.com/static/bower/emojify.js/images/emoji/wrench.png")
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up the amount of servers i am running in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "servers"
}