const botconfig = require("./botconfig.json");
const TOKEN = require("./LOCALTOKEN.json").token;
const Discord = require("discord.js");

bot.on("ready", async() => {
  console.log(`${bot.user.username} is On!`);
});

bot.login(TOKEN);
