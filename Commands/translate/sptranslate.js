// Code By Colack //

const Discord = require('discord.js');
const translate = require("@iamtraction/google-translate");

module.exports = {
	name: 'sptranslate',
	description: 'translate something.',
	async execute(message, args){
		const query = args.join(" ");
		if (!query) return message.reply('Please type something to translate.');

		const translated = await translate(query, { to: 'sp' });
		message.channel.send(translated.text);
	}
}
