// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'wave',
	description: "Lets one user wave to another user!",
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply(`${message.author.tag} you need to tag someone.`);
		}
		const taggedUser = message.mentions.users.first();

		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${message.author.tag} waved to ${taggedUser.username}!`)
	.setAuthor(`Orbital`)
	.setDescription(`${message.author.tag} used o!wave`)
	.setImage('https://i.imgur.com/asm0ijv.jpg')
	.setTimestamp()

		message.channel.send({embed});

	}
}
