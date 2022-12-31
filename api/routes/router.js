const express = require("express");
const get = require("../controller/get.js")
const post = require("../controller/post.js")
const update = require("../controller/update.js")
const router = express.Router();

const getStock = router.get("/api/stock", get.getStock);
const getUserInfo = router.get("/api/userinfo", get.getUserInfo);
const getInfo = router.get("/api/bal/:discordid", get.getInfo)

const addUser = router.post("/api/adduser", post.addUser);

const updateBalance = router.put("/api/updatebalance", update.updateBalance);

module.exports = {
    getStock,
    getUserInfo,
    addUser,
    updateBalance,
    getInfo
};