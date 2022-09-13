// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'hug',
	description: "Lets the User hug someone!",
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply(`${message.author.tag} you need to tag someone.`);
		}
		const taggedUser = message.mentions.users.first();

		const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${message.author.tag} hugged ${taggedUser.username}!`)
	.setAuthor(`Powered By Orbital`)
	.setDescription(`${message.author.tag} used o!hug`)
	.setImage('https://i.imgur.com/QUYEX4M.gif')
	.setTimestamp()

		message.channel.send({embed});

	}
}
