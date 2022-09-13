// Code By Colack //

const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	description: 'Lets the user kick someone.',
	execute(message, args){
		const { member, mentions } = message

		if (
			member.hasPermission('ADMINISTRATOR') ||
			member.hasPermission('KICK_MEMBERS')
		) {
			const target = mentions.users.first()
			if (target) {
				const targetMember = message.guild.members.cache.get(target.id)
				targetMember.kick()
				message.channel.send('User was kicked..')
			} else {
				message.channel.send(`${message.author.tag} You did not tag anyone.`)
			}
		}else{
			message.channel.send(`${message.author.tag} You do not have the permissions to use this command.`)
		}
	}
}
