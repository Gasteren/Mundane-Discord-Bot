let Discord = require("discord.js");
const hexcols = [0xcc0000, 0xcc3300, 0xcc6600, 0xcc9900, 0xcccc00, 0x99cc00, 0x66cc00, 0x33cc00, 0x00cc00, 0x00cc33, 0x00cc66, 0x00cc99, 0x00cccc, 0x0099cc, 0x0066cc, 0x0033cc, 0x0000cc, 0x3300cc, 0x6600cc, 0x9900cc, 0xcc00cc, 0xcc0099, 0xcc0066, 0xcc0033];

var parseTime = function(milliseconds) {
    var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var written = false;
    return (days?(written=true,days+" days"):"")+(written?", ":"")
        +(hours?(written=true,hours+" hours"):"")+(written?", ":"")
        +(minutes?(written=true,minutes+" minutes"):"")+(written?", ":"")
        +(seconds?(written=true,seconds+" seconds"):"")+(written?", ":"")
        +(milliseconds?milliseconds+" milliseconds":"");
};

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .setTitle(`Mundane Status`)
    .setDescription(`Here is my status:`, true)
    .addField(`Up Time:`, parseTime(bot.uptime), true)
    .addField(`Servers: `, `${bot.guilds.array().length}`, true)
    .addField(`Members: `, `${bot.users.size}`, true)
    .addField(`Channels: `, `${bot.channels.size}`, true)
    .addField(`Status: `, `ONLINE`, true)
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
    .setColor(hexcols[~~(Math.random() * hexcols.length)]);
    message.channel.send(embedhelpmember);
    console.log(`${message.author} Looked up the information about the server in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
}
module.exports.help = {
    name: "status"
}