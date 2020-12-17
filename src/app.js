const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

// it is require for partials
const parpath = path.join(__dirname,'../templates/partials');
hbs.registerPartials(parpath);

 


app.set('view engine' ,"hbs");
 

app.get("/" , (req,res) => {
    res.render("index",
    {
        name : "surinder kumar",
    });
})
app.get("/ab" , (req,res) => {
    res.send("partial are ready");
});

app.listen(3000, () => {
    console.log("port is running");
});