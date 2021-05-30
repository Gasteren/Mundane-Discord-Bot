module.exports.run = async (bot, message, args) => {
    message.channel.send('https://media.giphy.com/media/l1J9REbVPRgCVSJb2/giphy.gif').then(msg => {
        msg.react('💤');
        console.log(`${message.author} went to BED in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
    });
}

module.exports.help = {
name: "nn"
}