// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'exist',
	description: "Lets the user exist.",
	execute(message, args) {
	const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${message.author.tag} existed.`)
	.setAuthor(`Powered By Orbital`)
	.setDescription(`${message.author.tag} used o!exist`)
	.setImage('https://i.imgur.com/fVspInZ.jpg')
	.setTimestamp()

		message.channel.send({embed});

	}
}
