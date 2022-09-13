// Code By Colack //

module.exports = {
	name: 'vote',
	aliases: ['v', 'letsvote', 'poll'],
	description: 'Lol lets vote',
	execute(message, args) {
		message.react('👍').then(() => message.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
			message.reply('imagine upvoting');
		} else {
			message.reply('imagine downvoting');
		}
	})
	.catch(collected => {
		message.reply('Seriously? You did not even vote?');
	});
	},
};
