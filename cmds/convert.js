const Discord = require('discord.js');
const fs = require('fs');
const coinmarketcap = require('../coinmarketcap-fetch.js'); // github.com/n3onis/coinmarketcap-fetch
const cmc = new coinmarketcap();

module.exports.run = async (bot, message, args) => {
    if(args[0] && args[1] && args[2]) {

        var from, to, from_symbol, to_symbol;

        cmc.get(args[1], _from => {
            if(_from) {
                from_symbol = _from['symbol'];
                from = _from['price_btc'];
                cmc.get(args[2], _to => {
                    if(_to) {
                        to_symbol = _to['symbol'];
                        to = _to['price_btc'];
                    } else {
                        message.channel.send('Not found.');
                    }

                    var conversion = args[0] * from / to;
                    message.channel.send(`${args[0]} ${from_symbol} = ${conversion} ${to_symbol}`);
                    console.log(`Converted crypto in (${message.guild.name} # ${message.channel.name} - ${message.guild.id} by ${message.author})`);
                });
            } else {
                message.channel.send('Conversion not found.');
                console.log(`Conversion failed in because of inccorect values (${message.guild.name} # ${message.channel.name} - ${message.guild.id} by ${message.author})`);
            }
        });

        

    } else {
        message.channel.send('Error, you broke it lol');
        console.log(`Broke it lol (${message.guild.name} # ${message.channel.name} - ${message.guild.id} by ${message.author})`);
    }
}
  module.exports.help = {
  name: "convert"
  }