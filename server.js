const Discord = require("discord.js");
const client = new Discord.Client();

/**
 * to start the bot use the command on terminal
 * node server.js
 * "ctrl+C"
 * npx nodemon server.js
 */

client.on("ready", () => {
    console.log("Estoy lista!");

    console.log('Logged in as: ', client.user.tag)
    
    client.user.setStatus('dnd'); //online, idle, invisible, dnd
    
    console.log('Bot status: ', client.user.presence.status);

  });

 //welcome new members
 client.on('guildMemberAdd', member => {
   var channel = client.channels.cache.find(channel => channel.id === ('709535738223657124'))
   channel.send(`Welcome, my sweet ${member.user} 🥰`)
  });
 
 client.on("message", (message) => {
    //answers   
    if(message.content === 'te amo!')
     message.channel.send("YO MAS MI VIDA! <3");
    
    if(message.content === 'save me darling!')
     message.channel.send("u better don't touch my boyfrind or u will see me angry >:[");

    if(message.content === 'dormimos juntos?')
     message.channel.send("durmamos en cucharita pls uwu");
    
    if(message.content === 'hola corazon hermoso!')
     message.channel.send("hola hermoso mio <3")

    //avatar display
    if (message.content === '/avatar')
     message.reply(message.author.displayAvatarURL());
 });

 client.login("Nzk3Mzc1OTAxNDUyNDY4MjM2.X_lkLQ.mIuYpW2UuLyKX_rZplDaNtnyJYw");