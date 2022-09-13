// Code By Colack //

const currentDate = new Date();

module.exports = {
	name: 'date',
	aliases: ['time', 'day'],
	description: 'This command will send the user the current date.',
	execute(message, args) {
		message.channel.send(currentDate.toLocaleString());
	},
};
