// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'giorno',
	description: "I, Giorno...",
	execute(message, args) {
		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`I, giorno Giovanni..`)
	.setAuthor(`Orbital`)
	.setDescription(`Have a dream.`)
	.setImage('https://i.imgur.com/O4fS4KD.gif?noredirect')
	.setTimestamp()

		message.channel.send({embed});

	}
}
