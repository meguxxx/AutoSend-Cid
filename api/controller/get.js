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


module.exports = {
    getStock,
    getUserInfo,
};