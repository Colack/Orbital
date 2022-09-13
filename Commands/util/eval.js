// Code By Colack //

const Discord = require('discord.js');
const owner = 'USER_ID GOES HERE'

module.exports = {
	name: 'eval',
	description: 'Evalutate something.',
	execute(message, client, args){
		
		const { member, channel, content } = message

		if (member.id === owner) {
			
			const result = eval(content.replace('o!eval ', ''));
			
			message.channel.send(result)
			
		} else {
			
			message.channel.send('Only the bot creator can use this command!')
			
		}
	}
}
