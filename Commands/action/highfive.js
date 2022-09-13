// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'highfive',
	description: "Lets the User highfive someone!",
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply(`${message.author.tag} you need to tag someone.`);
		}
		const taggedUser = message.mentions.users.first();

		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${message.author.tag} highfived ${taggedUser.username}!`)
	.setAuthor(`Powered By Orbital`)
	.setDescription(`${message.author.tag} used o!highfive`)
	.setImage('https://i.imgur.com/NWK20Lk.gif')
	.setTimestamp()

		message.channel.send({embed});

	}
}
