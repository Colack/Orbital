// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'bully',
	description: "This command will bully user.",
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply(`${message.author.tag} you need to tag someone.`);
		}
		const taggedUser = message.mentions.users.first();

		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${message.author.tag} bullied ${taggedUser.username}!`)
	.setAuthor(`Powered By Orbital`)
	.setDescription(`${message.author.tag} used o!bully.`)
	.setImage('https://i.imgur.com/jznCcr2.gif')
	.setTimestamp()

		message.channel.send({embed});

	}
}
