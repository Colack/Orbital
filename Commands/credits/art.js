// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'art',
	description: "Shows the Orbital Artist",
	execute(message, args) {
		const embed = new MessageEmbed()
	.setColor('#90bede')
	.setTitle(`Orbitals Artwork is made by:`)
	.setAuthor(`Orbital`)
	.setDescription(`Allen Elliot Universe!`)
	.setImage('https://i.imgur.com/2zOTZ39.png')
	.setTimestamp()

		message.channel.send({embed});

	}
}
