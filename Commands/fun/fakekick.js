// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'fakekick',
	description: "This command will pretend to kick a user.",
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply(`${message.author.tag} you need to tag someone.`);
		}
		const taggedUser = message.mentions.users.first();

		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${message.author.tag} "Kicked" ${taggedUser.username}!`)
	.setAuthor(`Orbital`)
	.setDescription(`${message.author.tag} used o!kick.`)
	.setImage('https://i.imgur.com/2zOTZ39.png')
	.setTimestamp()

		message.channel.send({embed});

	}
}
