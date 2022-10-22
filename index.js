const discord = require("discord.js")
const client = new discord.Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "MessageContent" 
    ]
})

bot.on("Ready", function (){
    console.log(`${bot.user.username} Is Online!`);
});

bot.login(process.env.token);