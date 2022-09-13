// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'website',
	description: "Shows the Orbital Website",
	execute(message, args) {
		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`Orbital Website:`)
	.setAuthor(`Orbital`)
	.setDescription(`https://sites.google.com/view/orbital-blog/home`)
	.setImage('https://imgur.com/gallery/aaRLV2x')
	.setTimestamp()

		message.channel.send({embed});

	}
}
