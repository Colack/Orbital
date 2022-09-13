// Code By Colack //

module.exports = {
	name: 'coin',
	aliases: ['coinflip', 'flip'],
	description: "A simulated Coin.",
	execute(message, args) {
		function doRandHT() {
			var rand = ['Heads.', 'Tails.'];

			return rand[Math.floor(Math.random() * rand.length)];
		}

		const embed = {
			"title": `👛 ${message.author.tag} here you go:`,
			"description": doRandHT(),
			"color": 800080,
		};
		message.channel.send({ embed });


	}
}
