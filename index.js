const discord = require("discord.js")
const client = new discord.Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "MessageContent" 
    ]
})
