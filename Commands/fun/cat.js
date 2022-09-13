// Code By Colack //

module.exports = {
	name: 'cat',
	aliases: ['kitty', 'meow'],
	desription: 'cat.',
	execute(message, args){
		function doRandHT() {
			var rand = ['=^._.^= ∫', 'ฅ(＾・ω・＾ฅ)', '（＾・ω・＾✿）', '（＾・ω・＾❁）', '(=^･ω･^=)', '(^・x・^)', '(=^･ｪ･^=))ﾉ彡☆'];

			return rand[Math.floor(Math.random() * rand.length)];
		}

		const embed = {
			"title": `meow`,
			"description": doRandHT(),
			"color": 800080,
		};
		message.channel.send({ embed });


	}
}
