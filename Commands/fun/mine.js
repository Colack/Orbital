// Code By Colack //

module.exports = {
	name: 'mine',
	aliases: ['dig'],
	description: 'mining mining!',
		execute(message, args) {
		function doRandHT() {
			var rand = ['Coal.', 'Coal.', 'Coal.', 'Coal.', 'Coal.', 'Coal.', 'Coal.', 'Coal.', 'Coal.', 'Coal.', 'Iron.', 'Iron.', 'Iron.', 'Iron.', 'Iron.', 'Gold.', 'Gold.', 'Gold.', 'Gold.', 'Gold.', 'Copper!', 'Copper!', 'Copper!', 'Copper!', 'Copper!', 'Copper!', 'Copper!', 'Lapis...', 'Lapis...', 'Lapis...', 'Lapis...', 'Diamonds!', 'Diamonds!', 'Diamonds!', 'NETHERITE!!!!!', 'Emeralds..!', 'Emeralds..!', 'Redstone!', 'Redstone!', 'Redstone!', 'Redstone!', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.', 'stone.'];

			return rand[Math.floor(Math.random() * rand.length)];
		}

		const embed = {
			"title": `${message.author.tag} went mining and found:`,
			"description": doRandHT(),
			"color": 800080,
		};
		message.channel.send({ embed });


	}
}
