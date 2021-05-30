const Discord = require('discord.js');
const fs = require('fs');
const settings = require('../settings');
const prefixes = require('../prefixes');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You do not the have `Manage Guild` Permission!")
    if(!args[0] || args[0 == "help"]) return message.reply(`Usage: [Your prefix] <desired prefix here>`);

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let sEmbed = new Discord.RichEmbed()
    .setColor("FF9900")
    .setThumbnail("https://cdn.pixabay.com/photo/2014/04/02/10/19/cogwheel-303465__340.png")
    .setTitle("Prefix Set!")
    .setDescription(`Set to ${args[0]}`)
    .addBlankField(true)
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
    console.log(`| Prefix changed on server: ${message.guild.name} with server ID: ${message.guild.id} |`);

    message.channel.send(sEmbed)
}

module.exports.help = {
    name: "prefix"
}