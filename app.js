const express = require("express");

const app = express();

app.get("/" , (req,res) => {
    res.send("HOLA ESTA ES UNA PRUEBA CREANDO UN SERVER EN NODE CON AWS")
});

app.listen(3000,() => {
    console.log("Server running on port",3000)
});

