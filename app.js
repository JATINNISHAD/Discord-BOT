const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready",()=>{
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("message",async msg=>{
    if(msg.content ==='Hii'){
        msg.reply("hello, welcome... its just a sample..and its a bot");
    }
});

client.login("//here ur token//");
