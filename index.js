const { Client,LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client(
    {
        authStrategy: new LocalAuth(),
    }
);

client.once('ready', () => {
    console.log('Client is ready!');
    //console.log(client.info)
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('message', async (message) => {
    if (!message.from.includes('@g.us')) {
        return;
    }
    const botId = client.info.wid._serialized;
    console.log(botId);
    const mentionedIds = message.mentionedIds || [];
    if(mentionedIds.includes(botId)){
        console.log('Bot was mentioned in the group');
        console.log(`Message: ${message.body}`);
        await message.reply('Hey you mentioned me!')

    }


})

client.initialize();

// Client here refers to the bot that we are trying to create.
// You will be displayed a QR code in the terminal.
