// Code By Jack //

var settings = { // Contains Values for Some of the bots Stuff. //
	mode: "ON", // ON = on, can be booted up. MAINT = Inside Maintenance. Needed to be turned off. //
	framework: "Orbital Framework 2.1", // Current Running Framework. Mostly just the current project version. //
	version: "2.1", // Current Version of the Bot. //
	token: process.env['token'], // Current Token, Or PassWord For the Bot, mostly used in .env files or the Replit Database. //
	prefix: 'o!', // Prefix For The Bot //
	activity: 'Discord', // Current Activity Of The Bot //
	type: 'WATCHING' // Type of Activity. //
}

// Express/HTML Port Consts. //
// DO NOT CHANGE THESE AS THEY WILL BREAK THE BOTS HTML SERVER** //
// *Unless You Know How To //
// **Port is what port you are connecting to on the HTML server //

const express = require('express');
const app = express();
const port = 6000;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`App Bound to: http://localhost:${port}`));

// Clients and Packages //

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const commandFolders = fs.readdirSync('./Commands');
const memberCounter = require('./Schemas/member-counter');

client.once('ready', async () => {
	
	if (settings.mode == "MAINT") {
		
		// Put shutdown code here if you want to. I'm not going to be setting any up however. //
		
		console.log("Currently in Maintanence mode."); // Bot Needs to be Turned Off //
		
	} else {
		
		// Nothing, excpet for an bootup function maybe. //	
		
	}
	
	console.log(`Running On Version: ` + settings.version);
	console.log(`== RUNNING ON ORBITAL FRAMEWORK ==`);
	console.log(`==       CODED BY COLACK        ==`);
	
	client.user.setActivity(settings.activity, { type: settings.type });
	
	// Counts Members is specific client. //
	
	memberCounter(client);
});

client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.events  = new Discord.Collection();

// Different Handlers for Commands/Events //

['command_handler', 'event_handler'].forEach(handler =>{
	require(`./Handlers/${handler}`)(client, Discord);
});

// Checking for command folders. //

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./Commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./Commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

// Login as the Bot //

client.login(settings.token);

console.log("Bot Fully Logged in Without Any Errors!");
