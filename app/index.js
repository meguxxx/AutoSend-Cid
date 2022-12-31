const { Client, GatewayIntentBits, Collection, Events } = require("discord.js");
const config = require("../config.json")
const fs = require("node:fs")
const bot = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

//COMMAND HANDLER
const commands = new Collection();
const files = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of files) {
    const command = require(`./commands/${file}`);
    commands.set(command.name,command)
}

bot.on("ready", () => console.info(`bot online!`));

bot.on(Events.MessageCreate, (msg) => {
    const args = msg.content.substring(config["prefix"].length).split(" ");

    switch(args[0]){
        case "help":
            commands.get("help").execute(msg);
            break;
        case "bal":
            commands.get("bal").execute(msg);
            break;
    }
});

bot.login(config["token"]);
