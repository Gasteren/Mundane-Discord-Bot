module.exports.run = async (bot, message, args) => {
    message.channel.send('Here is the invite link to my owners Discord:');
    message.channel.send('https://discord.gg/cHRwwud');
    console.log(`${message.author} Created a invite link in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
}

module.exports.help = {
name: "invite"
}