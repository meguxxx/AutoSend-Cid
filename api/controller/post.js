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

const getInfo = (req,res) => {
    const query = `SELECT balance FROM user WHERE discordid = ${req.body["value"]}`;
    db.query(query, (error, data) => {
        if(error) res.json({respon: "gagal"});
        if(data.length == 0){
            res.json({respon: "gagal"})
            return false
        }
        res.json({
            respon:"berhsil",
            data: data
        })
    })
}

module.exports = {
    addUser,
    getInfo
}