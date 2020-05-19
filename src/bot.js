const eris = require('eris');
const config = require('./config');

const bot = new eris.Client(config.botToken);


bot.on('ready', () => {
    console.log('IM READY TO SLAP!');
});

bot.on('messageCreate', async (msg) => {
    const botWasMentioned = msg.mentions.find(
        mentionedUser => mentionedUser.id === bot.user.id,
    );

    if(botWasMentioned){
        try{
            await msg.channel.createMessage('Hey What is slapping');
        } catch (err) {
            console.warn('Failed to respond to a mention', e);
        }
    }
});

bot.on('error', err => {
    console.warn(err);
});

bot.connect();