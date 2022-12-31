const axios = require("axios");

axios.get("http://localhost:3000/api/userinfo")
    .then(response => {
        const value = response["data"].message[0].discordid
        Object.values(value).forEach(value => {
            console.info(value)
        })
        console.info(value)
    })

      
      