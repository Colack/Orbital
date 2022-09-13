// Code By Colack //

module.exports = {
	name: 'hack',
	aliases: ['fakehack', 'hacker'],
	description: "Hack Command.",
	execute(message, args) {
		function doRandHT() {
			var rand = ['Password - Ur mum', 'Email - Poopoopeepee@gmail.com', 'email - Thisisafakehack@gmail.com', 'Email - UniformKitten281@gmail.com', 'password - ThisIsTheBestBot', 'Password - HappyBday', 'Ip - 63.0.0.01', 'Ip - 9.09.0.0.0.1', 'Ip - 10.0.0.10', 'Password - 1010101', 'Password - ColackIsCool', 'Password - 12345678910', 'Ip - 10.10.0', 'email - eatyourgreenbeans@yahoo.com', 'email - Off@ColackisCool.com'];

			return rand[Math.floor(Math.random() * rand.length)];
		}

		const embed = {
			"title": `${message.author.tag} 💾 Hacking Results are in.....`,
			"description": doRandHT(),
			"color": 800080,
		};
		message.channel.send({ embed });

	}
}
