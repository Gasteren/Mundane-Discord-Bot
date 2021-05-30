module.exports.run = async (bot, message, args) => {
    message.channel.send('https://giphy.com/gifs/QIiqoufLNmWo8');
    console.log(`${message.author} made stuff up in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
}

module.exports.help = {
name: "imagination"
}