const botconfig = require("./botconfig.json");
const TOKEN = require("./LOCALTOKEN.json").token;
const Discord = require("discord.js");

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

  if(cmd === `${prefix}hello`){
    return message.channel.send("From the ashes, I have returned");
  }
});

bot.login(TOKEN);
