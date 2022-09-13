// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'support',
	description: "Invites the user to the support server.",
	execute(message, args) {
		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`Orbital Server:`)
	.setAuthor(`Orbital`)
	.setDescription(`https://discord.gg/8RrdbNDT`)
	.setImage('https://imgur.com/gallery/aaRLV2x')
	.setTimestamp()

		message.channel.send({embed});

	}
}
