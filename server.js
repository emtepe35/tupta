const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/data", function (req, res) {
    let o = { imie: "Mateusz", nazwisko: "Tupta", klasa: "3i1", grupa: "gr2" }
    res.send(o)
})

app.get("/", function (req, res) {
    res.send("Mój pierwszy heroku")
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})