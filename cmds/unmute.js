module.exports.run = async (bot, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have Manage Messages permission!")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.send("You did not specify a user mention or ID!");

        let role = message.guild.roles.find(r => r.name === "Mundane-Muted");
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.send("This user is NOT muted!");

        await toMute.removeRole(role);
        message.channel.send("I have unmuted the cheeky angel.");
        console.log(`${message.author} used the un-mute command in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);

        return undefined;
}

module.exports.help = {
    name: "unmute"
}