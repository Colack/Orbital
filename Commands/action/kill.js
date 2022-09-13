// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'kill',
	description: "Lets one user kill another user!",
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply(`${message.author.tag} you need to tag someone.`);
		}
		const taggedUser = message.mentions.users.first();

		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${message.author.tag} killed ${taggedUser.username}!`)
	.setAuthor(`Orbital`)
	.setDescription(`${message.author.tag} used o!kill`)
	.setImage('https://i.imgur.com/m8ZtlNO.gif')
	.setTimestamp()

		message.channel.send({embed});

	}
}
