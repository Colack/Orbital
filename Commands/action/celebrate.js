// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'celebrate',
	description: "Celebrate with Orbital!",
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply(`${message.author.tag} you need to tag someone.`);
		}
		const taggedUser = message.mentions.users.first();

		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${message.author.tag} celebrated with ${taggedUser.username}!`)
	.setAuthor(`Powered By Orbital`)
	.setDescription(`${message.author.tag} used o!celebrate`)
	.setImage('https://i.imgur.com/4TJEb32.gif')
	.setTimestamp()

		message.channel.send({embed});

	}
}
