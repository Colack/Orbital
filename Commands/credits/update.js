// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'update',
	description: "Shows the update logs.",
	execute(message, args) {
		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`Orbital Version:`)
	.setAuthor(`Orbital`)
	.setDescription(`Version 1.3.1; The Action Update!`)
	.setImage('https://imgur.com/gallery/aaRLV2x')
	.setTimestamp()

		message.channel.send({embed});

	}
}
