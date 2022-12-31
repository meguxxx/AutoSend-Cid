module.exports = {
    name: "help",
    description: "help command",
    execute(msg){
        const embed = {
            title: "🌟 COMANDS",
            fields: [
                {
                    name: "**CHECK BALANCE**",
                    value: "**command : !bal**"
                },
                {
                    name: "**CREATE CID**",
                    value: "!create <username> <password> <amount> <startnumber> <endnumber>",
                    inline: true
                }
            ]
        }
        msg.reply({embeds:[embed]})
    }
}