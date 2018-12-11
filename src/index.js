const botconfig = require("./botconfig.json");
const TOKEN = require("./LOCALTOKEN.json").token;
const Discord = require("discord.js");

const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async() => {
  console.log(`${bot.user.username} is On!`);
});

bot.login(TOKEN);
