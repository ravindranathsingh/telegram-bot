const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TELEGRAF_API_KEY);

bot.start((ctx) => ctx.reply("Welcome to your personal chat bot \n\n\n Say 'Hi' to get started"));
bot.on('sticker', (ctx) => ctx.reply('❤️'));
bot.hears('Hi', (ctx) => {
    ctx.reply('Hey there! What`s up? \nAre you looking for any of the below:');
    setTimeout(() => ctx.reply('1./Movie_recommendations \n2./Books \n3./Tourist_places'), 1000);
});
bot.hears('Hi', (ctx) => ctx.reply('Looking for any of these?'));
bot.command('Movie_recommendations', (ctx) => {
    ctx.reply('Some of the top rated latest movies are:');
    setTimeout(() => ctx.reply('1./Oppenheimer \n2./The_Matrix \n3./Avatar2 \n4./Avengers_Endgame \n5./May_December \n\n👆 Click To know More.'), 500)
});

bot.command('Books', (ctx) => {
    ctx.reply('Some of the interesting books are:');
    setTimeout(() => ctx.reply('1.The Great Gatsby \n2.To Kill a Mockingbird \n3.Wuthering Heights \n4.Harry Potter \n5.Jane Eyre'), 500)
});


bot.command('Tourist_places', (ctx) => {
    ctx.reply('Amazing Places must be visited:');
    setTimeout(() => ctx.reply('1.Goa \n2.Coorg \n3.Jaipur \n4.Chowmohalla Palace \n5.Rishikesh'), 500)
});

bot.command('Oppenheimer', (ctx) => ctx.reply('Name: Oppenheimer \nGenre: Thriller/Action \nIMDb: 8.4/10 \nCast: Cillian Murphy, Matt Damon'))
bot.command('The_Matrix', (ctx) => ctx.reply('Name: The Matrix \nGenre: Action/Sci-fi \nIMDb: 8.7/10 \nCast: Keanu Reeves, Laurence Fishburne'))
bot.command('Avatar2', (ctx) => ctx.reply('Name: Avatar2 \nGenre: Sci-fi/Action \nIMDb: 7.6/10 \nCast: Sam Worthington, Zoe Saldaña'))
bot.command('Avengers_Endgame', (ctx) => ctx.reply('Name: Avengers Endgame \nGenre: Action/Sci-fi \nIMDb: 8.4/10 \nCast: Robert Downey Jr, Chris Evans'))
bot.command('May_December', (ctx) => ctx.reply('Name: May December \nGenre: Romance/Comedy \nIMDb: 6.9/10 \nCast: Natalie Portman, Chris Tenzis'))

bot.launch();  