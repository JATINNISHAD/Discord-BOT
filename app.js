const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready",()=>{
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("message",async msg=>{
    if(msg.content ==='!object'){
        client.channels.get("564671795601604618").send("Hello, Someone used the >> !object << command in a text channel called >> "+msg.channel.name+" << in a server called >> "+msg.channel.guild.name);
    }
});

client.login("NTY0NjY5MTM4MDc4MDA3Mjk4.XKrPPQ.kGgjvLPxp5_a50531VSPgNDLYLs")