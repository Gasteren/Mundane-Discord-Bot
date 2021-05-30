module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have Manage Messages permission!")
    
            let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            if(!toMute) return message.channel.send("You did not specify a user mention or ID!");
    
            let role = message.guild.roles.find(r => r.name === "Mundane-Muted");
            if(!role) {
                try{
                    role = await message.guild.createRole({
                        name: "Mundane-Muted",
                        color: "#000000",
                        permissions: []
                    });
        
                    message.guild.channels.forEach(async (channel, id) => {
                        await channel.overwritePermissions(role, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false
                        });
                    });
                } catch(e) {
                    console.log(e.stack);
                }
            }
    
            if(toMute.roles.has(role.id)) return message.channel.send("This user is already muted!");
    
            await toMute.addRole(role);
            message.channel.send("I have muted the cheeky bugger.");
            console.log(`${message.author} used the mute command in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
    
            return;
            
        }

module.exports.help = {
    name: "mute"
}