const axios = require("axios");

axios.get("http://localhost:3000/api/stock").then(response => console.info(response["data"].message[0].cid1))