// Code By Colack //

const Discord = require('discord.js');

module.exports = {
	name: 'clear',
	description: 'Lets the user clear messages.',
	execute(message, args){
		const { member, mentions } = message

		if (
			member.hasPermission('ADMINISTRATOR') ||
			member.hasPermission('MANAGE_MESSAGES')
		) {
			const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}
		message.channel.send('Messages Deleted!')
		message.channel.bulkDelete(amount, true)
		}else{
			message.channel.send(`${message.author.tag} You do not have the permissions to use this command.`)
		}
	}
}
