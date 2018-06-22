const { Client, Util } = require('discord.js');
const Discord = require("discord.js");
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const client = new Client({ disableEveryone: true });
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();

client.login(TOKEN);
