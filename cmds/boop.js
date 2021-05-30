module.exports.run = async (bot, message, args) => {
        message.channel.send('https://i.imgur.com/d4nU9qR.gif');
        console.log(`${message.author} Booped in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
}

module.exports.help = {
    name: "boop"
}