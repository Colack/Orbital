// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'time',
	description: "Lets one user stop time for another user!",
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply(`${message.author.tag} you need to tag someone.`);
		}
		const taggedUser = message.mentions.users.first();

		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${message.author.tag} stopped time for ${taggedUser.username}!`)
	.setAuthor(`Orbital`)
	.setDescription(`${message.author.tag} used o!time`)
	.setImage('https://i.imgur.com/WaVVevX.gif?noredirect')
	.setTimestamp()

		message.channel.send({embed});

	}
}
