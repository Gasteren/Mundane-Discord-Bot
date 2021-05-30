module.exports.run = async (bot, message, args) => {
        message.channel.send('https://gph.is/1KjihQe');
        console.log(`${message.author} Used some MAGIC in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
}

module.exports.help = {
    name: "magic"
}