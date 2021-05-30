let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var embedhelpmember = new Discord.RichEmbed()
    .addField("boop", "This will pop in a sombra boop GIF in the chat to.")
    .addField("imagination", "This will tell your friends to stop making up stuff.")
    .addField("magic", "This will show your friends some MAGIC GIF in the chat!")
    .addField("nn", "This will tell all your friends goodnight with an awesome GIF!")
    .addField("rip", "Tell all your friends to pay respects with this awesome GIF!")
    .addField("roleactivity", "This will give you information about Role Activity.")
    .addField("dh", "This will show the top builds used in raids, this will work other classes aswell.")
    .addField("prefix", "With this command you can change your current prefix with a new one!")
    .addField("price", "Lookup your favorite Crypto Currencys price, Usage; `price btc`")
    .addField("convert", "This command will let you convert Cryptos, Usage; `convert 1 btc eth`")
    .addField("weather", "This command will lookup the weather by typing in your location or zipcode.")
    .addField("info", "This command will give you the information about YOUR server.")
    .addField("mute", "This will prevent a user from chatting or reacting with emojis.")
    .addField("unmute", "This will unmute a user and will allow them to talk and react again.")
    .setColor(0xFFFF00)
    .setThumbnail("http://www.vancitymommyd.com/wp-content/uploads/2018/01/orange-question-mark-fileorange-question-marksvg-wikimedia-commons-clip-art.png")
    .addBlankField(true)
    .setTimestamp()
    .setFooter("Beta: v1 | Rich Embed Test | ")
message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
console.log(`${message.author} Looked up ALL commands trough the help command in ${message.guild.name}#${message.channel.name} - ${message.guild.id}`);
if(message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
}

module.exports.help = {
    name: "help"
}