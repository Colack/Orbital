// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'curse',
	description: "Lets the User curse someone!",
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply(`${message.author.tag} you need to tag someone.`);
		}
		const taggedUser = message.mentions.users.first();

		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${message.author.tag} cursed ${taggedUser.username}!`)
	.setAuthor(`Powered By Orbital`)
	.setDescription(`${message.author.tag} used o!curse`)
	.setImage('https://i.imgur.com/Z1KRsdq.jpg')
	.setTimestamp()

		message.channel.send({embed});

	}
}
