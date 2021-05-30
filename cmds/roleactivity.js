let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .setTitle(`Role Activity`)
    .setDescription(`Roleactivity makes it so when a person is streaming or listening they will get a special rank.`)
    .addField("Streaming", "If you add this role Mundane bot will automatically put people in that role when streaming.")
    .addField("Listening to Spotify", "If you add this role Mundane bot will automatically put people in that role when listening.")
    .setColor(0xFFFF00)
    .setThumbnail("https://aminoapps.com/static/bower/emojify.js/images/emoji/wrench.png")
    .addBlankField(true)
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up info about the roleactivity in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "roleactivity"
}