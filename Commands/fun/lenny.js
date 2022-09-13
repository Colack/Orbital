// Code By Colack //

module.exports = {
    name: 'lenny',
		aliases: ['randomlenny', 'lennys'],
    description: "this is a command",
    execute(message, args){
        function doRandHT() {
            var rand = ['( ͡° ͜ʖ ͡°)','(☭ ͜ʖ ☭)','(ᴗ ͜ʖ ᴗ)','( ° ͜ʖ °)','(⟃ ͜ʖ ⟄) ','( ‾ ʖ̫ ‾)','(͠≖ ͜ʖ͠≖)','( ͡° ʖ̯ ͡°)','ʕ ͡° ʖ̯ ͡°ʔ','( ͡° ل͜ ͡°)','( ͠° ͟ʖ ͡°)','( ͠° ͟ʖ ͠°)','( ͡~ ͜ʖ ͡°)','( ͡o ͜ʖ ͡o)','( ͡◉ ͜ʖ ͡◉)'];
            
            return rand[Math.floor(Math.random()*rand.length)];
            }
            
             const embed = {
            "title": `❔ Whos That Lenny? ❔`,
            "description": doRandHT(),
            "color": 800080,
            };
            message.channel.send({ embed });
            
            
            }
}
