const discord = require("discord.js");

const TOKEN = "MzQ0MjkwNDAxNDEyMTg2MTEz.DGuFeg.fKTxBcO5fea84GQEf4t8eTOBihg";
const PREFIX = "~";

var bot = new discord.Client();

bot.on("ready", function() {
  console.log("Hymen is now running!");
})

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;


  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "ping":
        message.channel.send("Pong!");
        break;

    case "info":
        message.channel.send("This is Hymen! I am still under development, so don't conplain about me not having features.");
        break;
default:
      message.channel.send("Command invalid. Check command and try again.")

  }
});

bot.login(TOKEN);
