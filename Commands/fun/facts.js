// Code By Colack //

module.exports = {
	name: 'facts',
	description: 'A command that shows Fun Facts about the bot.',
		execute(message, args) {
		function doRandHT() {
			var rand = ['The o!reload command reloads any command you want!', 'As of update 1.1 Bugfix 4, Orbital has 53 files!', 'Orbital has a secret file that helps it achieve sentience...', 'The main file for Orbital was originally called Main.js, but Colack changed it to index.js later to make things easier!', 'Spoon, put a fun fact here please.', 'Ping, Reload, Server, And User-info are the only commands that dont have aliases.', 'Team Orbital consists of 2 members, and is always welcome to newcomers!', 'Orbital was originally a joke bot, but then became mainstream when it started getting popular!'];

			return rand[Math.floor(Math.random() * rand.length)];
		}

		const embed = {
			"title": `❔ ${message.author.tag} ❔ fun fact time:`,
			"description": doRandHT(),
			"color": '003b59',
		};
		message.channel.send({ embed });


	}
}
