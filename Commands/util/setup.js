// Code By Colack //

const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'setup',
    description: 'Shows links for Orbital and different sources/commands.',
    execute(message, args){
        const embed = new MessageEmbed()
	.setColor('#003b59')
	.setTitle('Thank You For using Orbital 🚀')
	.setURL('https://sites.google.com/view/orbital-blog/home')
	.setAuthor('Orbital', 'https://i.imgur.com/2zOTZ39.png', 'https://sites.google.com/view/orbital-blog/home')
	.setDescription('Orbital Startup Guide.')
	.setThumbnail('https://i.imgur.com/2zOTZ39.png')
	.addFields(
		{ name: 'Thank you for choosing Orbital 🚀!', value: 'Follow this guide to start using orbital!' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Commands:', value: 'o!commands', inline: true },
		{ name: 'Credits:', value: 'o!credits', inline: true },
	)
	.addField('Users:', 'o!userid', true)
	.setImage('https://i.imgur.com/2zOTZ39.png')
	.setTimestamp()
	.setFooter('Spoon, please put the footer text here...', 'https://i.imgur.com/2zOTZ39.png');

	message.channel.send({embed});
    }
}
