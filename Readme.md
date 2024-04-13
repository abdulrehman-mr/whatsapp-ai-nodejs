# WhatsApp AI Lite

WhatsApp AI Lite is a simplified version of a WhatsApp bot that utilizes AI to automate message replies.

## Requirements

- **Processor**: Atleast Core i5 8 Gen or later
- **RAM**: 8 GB OR Above
- **GPU**: It requires atleast 4GB GPU 1050 or Above
- **Olamma**: Olamma is required to be installed and running. You can run the following command to install the required model:

olamma run llama2

## Installation

To install WhatsApp AI Lite, follow these steps:

1. Install the required npm packages:

npm i whatsapp-web.js
npm install qrcode-terminal
npm install axios

2. Navigate to the puppeteer directory and install the required dependencies:

cd ./node_modules/puppeteer
npm install
cd ..


3. Install WhatsApp Web.js:

npm install github:pedroslopez/whatsapp-web.js
npm install github:pedroslopez/whatsapp-web.js#webpack-exodus

4. Fix any audit issues:

npm audit fix

## Usage

To run WhatsApp AI Lite, execute the following command:

node index.js

## How It Works

WhatsApp AI Lite listens for incoming messages and automatically generates replies using an AI model. It fetches responses from an external API and sends them back to the user.