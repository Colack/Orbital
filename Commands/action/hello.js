// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'hello',
	description: "Waves to a user.",
	execute(message, args) {
		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`Hello!`)
	.setAuthor(`Orbital`)
	.setDescription(`Hello ${message.author.tag}!`)
	.setImage('https://i.imgur.com/2zOTZ39.png')
	.setTimestamp()

		message.channel.send({embed});

	}
}
