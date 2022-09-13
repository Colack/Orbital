// Code By Colack //

module.exports = {
	name: 'cards',
	description: "A simulated deck of cards.",
	execute(message, args) {
		function doRandHT() {
			var rand = ['Ace of Spades.', 'Ace of Clubs.', 'Ace of Diamonds.', 'Ace of Hearts.', 'One of Spades.', 'One of Clubs.', 'One of Diamonds.', 'One of Hearts.', 'Two of Spades.', 'Two of Clubs.', 'Two of Diamonds', 'Two of Hearts', 'Three of Clubs.', 'Three of Spades.', 'Three of Diamonds.', 'Three of Hearts.', 'Four of Clubs.', 'Four of Diamonds.', 'Four of Spades.', 'Four of Hearts.', 'Five of Clubs.', 'Five of Diamonds.', 'Five of Spades.', 'Five of Hearts.', 'Six of Clubs.', 'Six of Diamonds.', 'Six of Spades.', 'Six of Hearts.', 'Seven of Spades.', 'Seven of Hearts.', 'Seven of Diamonds.', 'Seven of Clubs.', 'Eight of Spades.', 'Eight of Diamonds.', 'Eight of Hearts.', 'Eight of Clubs.', 'Nine of Spades.', 'Nine of Diamonds.', 'Nine of Clubs.', 'Nine of Hearts.', 'Ten of Diamonds.', 'Ten of Spades.', 'Ten of Hearts.', 'Ten of Clubs.', 'Jack of Spades.', 'Jack of Hearts.', 'Jack of Clubs.', 'Jack of Diamonds.', 'Queen of Hearts.', 'Queen of Diamonds.', 'Queen of Clubs.', 'Queen of Spades.', 'King of Hearts.', 'King of Diamonds.', 'King of Spades.', 'King of Clubs.'];
			return rand[Math.floor(Math.random() * rand.length)];
		}

		const embed = {
			"title": `🃏 ${message.author.tag} here is your card:`,
			"description": doRandHT(),
			"color": 800080,
		};
		message.channel.send({ embed });


	}
}
