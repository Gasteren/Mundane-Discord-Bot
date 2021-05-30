const Discord = require('discord.js');
const fs = require('fs');
const coinmarketcap = require('../coinmarketcap-fetch.js'); // github.com/n3onis/coinmarketcap-fetch
const cmc = new coinmarketcap();

module.exports.run = async (bot, message, args) => {
    if(args[0]) {
        cmc.get( args[0], coin => {
            if(coin) {
                var price_usd = coin['price_usd'];
                message.channel.send( `${coin['symbol']} price: $${price_usd}` );
                var cmd = args[0];
                console.log(`Requested '${cmd}' Price. (${message.guild.name} # ${message.channel.name} - ${message.guild.id} by ${message.author})`);
            } else {
                message.channel.send( 'Not found.' );
                console.log(`Failed looking up the '${cmd}' Price. (${message.guild.name} # ${message.channel.name} - ${message.guild.id} by ${message.author})`);
            }
        });
    } else {
        message.channel.send('Undefined symbol.');
    }
  }
  
  module.exports.help = {
  name: "price"
  }