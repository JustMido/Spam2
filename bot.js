const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("562699277357285416")
setInterval(function() {
channel.send(`JustSpamBoi JustSpamBoi JustSpamBoi JustSpamBoi JustSpamBoi JustSpamBoi JustSpamBoi JustSpamBoi JustSpamBoi`);
}, 30)
})

client.login(process.env.BOT_TOKEN);