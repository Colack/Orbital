// Code By Colack //

module.exports = {
	name: '8ball',
	aliases: ['8', 'fortune', 'magic8', 'big8'],
	description: "A simulated 8ball.",
	execute(message, args) {
		function doRandHT() {
			var rand = ['As i see it, yes.', 'Ask again later.', 'I cannot tell you now.', 'Do not count on it.', 'No.', 'Yes.', 'Very improbable.', 'Very probable.'];

			return rand[Math.floor(Math.random() * rand.length)];
		}

		const embed = {
			"title": `🎱 ${message.author.tag} here you go:`,
			"description": doRandHT(),
			"color": 800080,
		};
		message.channel.send({ embed });


	}
}
