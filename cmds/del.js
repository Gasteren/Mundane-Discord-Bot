module.exports.run = async (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return message.reply('I cannot delete messages.');
    var deleteCount = args[0];
    if (!deleteCount || deleteCount < 2 || deleteCount > 100 || isNaN(args[0])) return message.reply('Please provide a Number between 2-100');
    message.channel.fetchMessages({limit: deleteCount}).then(messages => message.channel.bulkDelete(messages)).then(msg => {
        message.reply(`I have deleted ${msg.size} messages.`)
        .then(msg => {msg.delete(5000)})
        console.log(`${message.author} deleted ${msg.size} messages in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
    })

    }

module.exports.help = {
    name: "del"
}