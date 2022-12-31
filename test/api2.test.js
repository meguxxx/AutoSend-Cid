const axios = require("axios");

const data = {
    discordid: 1050055635091345478
}

axios.get("http://localhost:3000/api/bal/1050055635091345478")
    .then(response => console.table(response["data"]))