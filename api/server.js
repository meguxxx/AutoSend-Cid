const express = require("express");
const app = express();
const route = require("./routes/router.js")

app.use(express.json());

//GET
app.use("/", route.getStock);
app.use("/", route.getUserInfo);
app.use("/", route.getInfo);

//POST
app.use("/", route.addUser);


//UPDATE
app.use("/", route.updateBalance);

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/login.html")
});

app.listen(3000, () => {
  console.info("server running!")
});
