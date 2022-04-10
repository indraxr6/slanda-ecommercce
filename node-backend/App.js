require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let api = ["user","admin","product","order"];

for(let i = 0; i < api.length; i++){
    app.use(`/api/${api[i]}`, require(`./routes/${api[i]}.router`));
}

app.listen(process.env.APP_PORT, () => {
    console.log(`Port is connected at ${process.env.APP_PORT}`);
})