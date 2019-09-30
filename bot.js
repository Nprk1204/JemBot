const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjI4MDIxNjE3ODU5MjMxNzQ0.XZFa7Q.8bMoCHKzp9qhGZIowlK7J8TqCkc';

const PREFIX = '!';

var version = '1.0.0';


bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!');
            break;

        case 'channels':
            message.channel.sendMessage('https://www.twitch.tv/jemjem1. \nhttps://www.youtube.com/channel/UCwrPCbYSX2GVgvgtljKZM0g')
            break;

        case 'bot':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version ' + version)                  
            }else{
                message.channel.sendMessage('Invalid command')
            }
            break;

        case 'help':
            message.channel.sendMessage('Commands: \n1. !help \n2. !channels \n3. !bot version');
            break;
    }
})

bot.login(token);
