// Code By Colack //

module.exports = {
	name: 'dice',
	aliases: ['roll', 'd6', 'diceroll'],
	description: "Command will have the bot roll a die.",
	execute(message, args) {
		var number = Math.floor(Math.random() * 6) + 1;
		message.channel.send(`${message.author.tag} Your number is ${number} 🎲`);
	}
};
