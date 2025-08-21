const axios = require('axios');

async function handleDetailsCommand(message) {
    try {
        const parts = message.body.trime().split(' ');
        if (parts.length < 6) {
            await message.reply(
                `Please provide details in the format:\n@bot details <name> <email> <mobile> <location>`
            );
            return;
        }
        const data = {
            name: parts[2],
            email: parts[3],
            mobile: parts[4],
            location: parts.slice(5).join(' ')
        };
        await axios.post('http://localhost:5000/api/details', data);
    } catch (error) {
        console.log(error);
        await message.reply('Something went wrong, please try again');

    }
}

module.exports = { handleDetailsCommand }