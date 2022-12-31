
module.exports = {
    name: "bal",
    decription: "check balance",
    execute(msg){
        const axios = require("axios");
        const embed = {
            color: 5763719,
            title: "BALANCE",

        }
        const data = {
            discordid: `${msg.author.id}`
        }
        axios.get("http://localhost:3000/api/bal",JSON.stringify(data))
            .then(response => console.info(response))
    }
}