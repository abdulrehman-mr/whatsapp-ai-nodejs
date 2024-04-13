const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios');

const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

async function fetchResponses(message) {
    const url = 'http://localhost:11434/api/generate';
    const requestBody = {
        model: 'llama2',
        prompt: 'As an assistant of whatsapp reply to this user and in a short message. Here is message from user'+ message +'',
        "stream": false
    }

    try {
        // Make the HTTP request
        const response = await axios.post(url, requestBody);
    
        let combinedResponse = '';
    
        try {
            const json = response.data;
            if (json.response) {
                combinedResponse = json.response;
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    
        // Return the combined response
        return combinedResponse;
    } catch (error) {
        console.error('Error fetching responses:', error);
        return null;
    }
}

client.on('message_create', message => {
    // Ignore messages sent by the bot itself
    if (message.fromMe) {
        return; 
    }
    // console.log(message.body);
    (async () => {
        const aimessage = await fetchResponses(message);
        client.sendMessage(message.from, aimessage.trim());

    })();
});

client.initialize();
