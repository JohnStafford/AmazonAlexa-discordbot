const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content === 'Alexa, Ban.') {
   ban(user, server, length, callback)
  }
});

client.on('message', msg => {
  if (msg.content === 'Alexa, What is your favourite youtube channel?') {
    msg.channel.sendMessage('Go check my list at, https://alexa_list.neocities.org/ytlist.html.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Alexa, What is your favourite sims 4 youtube channel?') {
    msg.channel.sendMessage('https://www.youtube.com/user/TheEnglishSimmer/');
  }
});

client.on('message', msg => {
  if (msg.content === 'Alexa, What is your website?') {
    msg.channel.sendMessage('I have none yet.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Alexa, What is your github?') {
    msg.channel.sendMessage('I have none yet.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Alexa, Who is your owner?') {
    msg.channel.sendMessage('TheLameCompany#9271.');
  }
});


client.on('message', msg => {
  if (msg.content === 'Alexa, Help') {
    msg.reply('Check your DMs!');
  }
});


client.on('message', msg => {
  if (msg.content === 'Alexa, Commands') {
    msg.reply('Check your DMs!');
  }
});


client.login('MzA2NDY0NTA0MDAxMDY5MDU2.C-EOUA.VOixcCR1zZv7tRNfrsyt9qJOu-w');