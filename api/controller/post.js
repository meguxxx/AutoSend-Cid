const db = require("../database/connect.js");

const addUser = (req,res) => {
    const querys = `INSERT INTO user VALUES("${req.body["growid"]}",${req.body["balance"]},${req.body["discordid"]})`;
    db.query(querys, (error,data) => {
        if(error) res.json({response: "gagal", error:error});
        res.json({
            response: "berhasil menggambil data",
            data: data
        });
    });
}

module.exports = {
    addUser
}