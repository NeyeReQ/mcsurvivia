const discord = require("discord.js")
const client = new discord.Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "MessageContent" 
    ]
})
<<<<<<< HEAD

bot.on("Ready", function (){
    console.log(`${bot.user.username} Is Online!`);
});

bot.login(process.env.token);
=======
>>>>>>> 02fae9b6d79b01c1c69d10a25c0d6b88bac21e49
