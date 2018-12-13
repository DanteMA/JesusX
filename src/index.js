const botconfig = require("./botconfig.json");
const TOKEN = require("./LOCALTOKEN.json").token;
const Discord = require("discord.js");
var shell = require('shelljs');

const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async() => {
  console.log(`${bot.user.username} is On!`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}update`) {
    // currently just 1 developer todo: add an array of developers unique id
    if(message.author.discriminator == '0636') {
      message.channel.send("Actualizando...")
      shell.exec("git pull;npm install;pm2 restart JesusX");
      return message.channel.send("Actualizacion completa!")
    }
    else {
      return message.channel.send("Sorry, you cannot order me.")
    }
  }
  if(cmd === `${prefix}hello`){
    return message.channel.send("From the ashes, I have returned.");
  }
});

bot.login(TOKEN);
