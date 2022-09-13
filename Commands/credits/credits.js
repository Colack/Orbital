// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'credits',
	description: "Shows the Orbital Credits",
	execute(message, args) {
		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`Orbital Credits:`)
	.setAuthor(`Orbital`)
	.setDescription(`Orbital is made by Colack, and its artwork is made by Allen!`)
	.setImage('https://i.imgur.com/2zOTZ39.png')
	.setTimestamp()

		message.channel.send({embed});

	}
}
