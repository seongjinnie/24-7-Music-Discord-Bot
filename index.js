////This bot works on version 12.5.3 of Discord.js////

////FILE PACKAGES, DON'T DELETE////
const { TOKEN, CHANNEL, SERVER, STATUS, LIVE } = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const express = require('express');
const app = express();

////BOT'S PRESENCE (u can change the name, type and status)////
client.on('ready', async () => {
  client.user.setPresence( {
  activity: {name: `The bot's presence`,
  type: "LISTENING"},
  status:"listening"})
  let channel = client.channels.cache.get(CHANNEL) || await client.channels.fetch(CHANNEL);
  if(!channel) return;
  const connection = await channel.join();
  connection.play(ytdl(LIVE))
})

////YTDL CONFIG, DON'T DELETE////
setInterval(async function() {
  if(!client.voice.connections.get(SERVER)) {
  let channel = client.channels.cache.get(CHANNEL) || await client.channels.fetch(CHANNEL)
  if(!channel) return;
  const connection = await channel.join()
  connection.play(ytdl(LIVE))
  }
}, 20000)

////Your bot's token goes inside ""////
client.login("YOUR-BOT'S-TOKEN-GOES-HERE");