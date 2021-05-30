module.exports.run = async (bot, message, args) => {
        message.channel.send('https://www.wowprogress.com/guild/eu/ravencrest/Checkered+Past');
        console.log(`${message.author} looked up wowprogress in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
}

module.exports.help = {
    name: "wowprogress"
}
