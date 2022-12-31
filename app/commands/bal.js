
module.exports = {
    name: "bal",
    decription: "check balance",
    execute(msg){
        const axios = require("axios");
        
        axios.get(`http://localhost:3000/api/bal/${msg.author.id}`)
            .then(response => {
                if(response["data"]["respon"] == "berhasil"){
                    const embed = {
                        color: 3447003,
                        title: "Balance",
                        description: `**GrowID : --\nBalance : ${response["data"]["data"][0]["balance"]}**`
                    }

                    msg.reply({embeds: [embed]})
                } else {
                    const embed = {
                        color: 15548997,
                        title: "Balance",
                        description: "Upss Anda Blm Register"
                    };
                    console.info(response["data"]["respon"])
                    msg.reply({embeds: [embed]})
                }
            })
    }
}