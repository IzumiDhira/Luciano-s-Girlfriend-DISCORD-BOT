const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

/**
 * to start the bot use the command on terminal
 * npx nodemon server.js
 */

client.on("ready", () => {
    console.log("Estoy lista!");

    console.log('Logged in as: ', client.user.tag)
    
    client.user.setStatus('dnd'); //online, idle, invisible, dnd
    
    console.log('Bot status: ', client.user.presence.status)

  });

//welcome new members

 client.on('guildMemberAdd', member => {
   
   var channel = client.channels.cache.find(channel => channel.id === ('709535738223657124'))
   
   channel.send(`Welcome, my sweet ${member.user} 🥰`)
  });
 
 client.on("message", (message) => {

  if (message.author.bot) return;

  var owner = config.IdOwner;

//answers   

    if(message.content === 'hola')
      message.channel.send('hola');

    if(message.content === 'o/')
      message.channel.send('o/');

    if(message.content === 'te amo!')
      if(message.author.id === '258675755129503745')
        message.channel.send("YO MAS MI VIDA! <3 😍");
    
    if(message.content === 'save me darling!')
      if(message.author.id === '258675755129503745')
        message.channel.send("u better don't touch my boyfrind or u will see me angry >:[");

    if(message.content === 'dormimos juntos?')
      if(message.author.id === '258675755129503745')
        message.channel.send("durmamos en cucharita pls uwu 🥰");

    if(message.content === 'dormimos separados?')
      if(message.author.id === '258675755129503745')
        message.channel.send("... fuck u 😡");

    if(message.content === 'hola corazon hermoso!')
      if(message.author.id === '258675755129503745')
        message.channel.send("hola hermoso mio <3");

    if(message.content === 'r u alive?')
      message.channel.send("why u r asking?"); 
    
    if(message.content === 'amo a mi bot')
     if(message.author.id === owner)
        message.channel.send("amo a mi programador");
    /*if(message.content === 'amo a mi bot')
     if(message.author.id === !owner)
        message.channel.send("tu no eres mi amo :/");*/

//pasivos

    if(message.content === 'marcos pasivo')
      message.channel.send("🏳️‍🌈 marcos pasivo");
    
    if(message.content === 'yuba pasivo')
      message.channel.send("yuba pasivo yuba pasivo");

    if(message.content === 'fersa pasivo')
      message.channel.send("🏳️‍🌈");

    if(message.content === 'pasivo')
      message.channel.send("🏳️‍🌈")

//uwu variations

    if(message.content === 'uwu')
      message.channel.send("UwU");
    
    if(message.content === 'UwU')
      message.channel.send("uwu");
   
    if(message.content === '7w7')
      message.channel.send("7w7");

//commands

const prefix = config.prefix;

const args = message.content.slice(prefix.length).trim().split(/ +/g);

const command = args.shift().toLowerCase();

  if(message.content === (prefix + 'ping')){
    message.channel.send("pingo");
  }

  if(message.content === (prefix + 'avatar')){ 

    var embed = new Discord.MessageEmbed()

      .setTitle('Here you have your avatar!')
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0xed51ff)
      .setFooter("Your avatar has been used to make a fake profile in FBI's database", client.user.avatarURL)
      .setImage(message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .setURL(message.author.avatarURL)
      .setTimestamp()

      message.channel.send({embed})
  }

  if(command === 'kick'){
  
    let user = message.mentions.users.first();
    let reason = args.slice(1).join(' ');

    if (message.mentions.users.size < 1) return message.reply('You must mention someone.').catch(console.error);
    if (!reason) return message.channel.send('Write a reason, `*kick @username [reason]`');
    if (!message.guild.member(user).kickable) return message.reply('Not kickable by me.');

    message.guild.member(user).kick(reason);
    message.channel.send(`**${user.username}**, was kicked out from the server, reason was: ${reason}.`);
  }

let text = args.join(" ");

  if(command === 'say'){
    
    if(!text) return message.channel.send('Write something to say.');
  
    message.channel.send(text);

  }

  if(command === '8ball'){

    var rts = ['Yes', 'No', 'Why?', 'Please', 'Maybe', "I don't know", 'Definitely?', 'ofc', ' si ', ' no ', ' ofc ', ' ofc not ']

    if (!text) return message.reply(`Ask a question.`);

    message.channel.send(message.author.username +' to your question `'+ text +'` my answer is : `'+ rts[Math.floor(Math.random() * rts.length)]+'`');
  
  }

 });

 client.login(config.token);
