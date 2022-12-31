const db = require("../database/connect.js");

const getStock = (req,res) => {
    const querys = "SELECT * FROM stock";
    db.query(querys, (error,data) => {
        if(error) res.send({respon:"gagal",message:error});
        res.json({
            respon: "berhasil",
            message: data
        });
    });
};

const getUserInfo = (req,res) => {
    const user = "SELECT * FROM user";
    db.query(user, (error,data) => {
        if(error) res.send({respon:"gagal",message:error});
        res.json({
            respon: "berhasil",
            message: data
        });
    });
};

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
    getStock,
    getUserInfo,
    getInfo
};