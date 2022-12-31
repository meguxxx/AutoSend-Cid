const db = require("../database/connect.js");

const updateBalance = (req,res) => {
    const querys = `UPDATE user SET balance = balance + ${req.body["amount"]} WHERE growid = "${req.body["growid"]}"`
    db.query(querys, (error,data) => {
        if(error) res.json({response: "gagal", error:error});
        res.json({
            response: "berhasil",
            message: `data berhasil di upd`
        })
    })
}

module.exports = {
    updateBalance
};