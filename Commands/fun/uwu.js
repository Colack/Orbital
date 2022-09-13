// Code By Colack //

module.exports = {
    name: 'uwu',
		aliases: ['STOPITPLSSTOPIT'],
    description: "shut up idot",
    execute(message, args){
        function doRandHT() {
            var rand = ['#antiuwugang','stop saying that please stop','NO UWUS','no uwu stop','stop saying uwu amogus please stop get out of my head','stop it','shut up'];
            
            return rand[Math.floor(Math.random()*rand.length)];
            }
            
             const embed = {
            "title": `${message.author.tag}:`,
            "description": doRandHT(),
            "color": 800080,
            };
            message.channel.send({ embed });

    } 
}
