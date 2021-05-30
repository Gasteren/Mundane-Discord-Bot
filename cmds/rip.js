module.exports.run = async (bot, message, args) => {
    message.channel.send('https://i.imgur.com/nxMuIA5.gif');
    message.channel.send("Press 🇫 to pay respects").then(msg => {
        msg.react('🇫');
        console.log(`${message.author} Payed respects in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
    });
}

module.exports.help = {
name: "rip"
}