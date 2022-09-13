// Code By Colack //

module.exports={
    name:'ping',
    description: "Command will ping the bot.",
    execute(message, args){
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms`);
		console.log('Bot was pinged.');
        }
      };
