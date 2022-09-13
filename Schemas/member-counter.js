module.exports = async (client) => {
    const guild = client.guilds.cache.get('INSERT SERVER ID HERE'); 
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('INSERT GUILD ID HERE');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`)
        console.log('Updated Member Count.')
    }, 600000);
} 
