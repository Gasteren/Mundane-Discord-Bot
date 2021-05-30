module.exports.run = async (bot, message, args) => {
    message.channel.send('https://i.imgur.com/pLcGvI6.jpg');
    message.channel.send("RIP my bois").then(msg => {
        msg.react('🇽');
        msg.react('🇩');
        console.log(`${message.author} Payed respects in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
    });
}

module.exports.help = {
name: "blumchen"
}