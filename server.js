const express = require("express")
const app = express()

app.get("/", (req, res) => {
    console.log("dieudonne")
    res.send("Hello world bora ")
})

app.listen(5001)