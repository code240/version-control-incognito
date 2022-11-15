const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 9000;

const app = express();

const link = "playlink.fun"; 
const appLink = "https://play.google.com/store/apps/details?id=com.vipinrao.incognito";
const VersionCode = "vipin1.0.0";
const updateNeed = 1; // 0 - no need , 1 - not compulsary to update , 2 - compulsary to update


app.use(cors());
app.use(express.json());




app.get("/",(req,res) => {
    res.send("hii version code");
})


app.get("/api/updateAppStatus",(req,res) => {
    res.send({appLink : appLink, updateNeed : updateNeed,VersionCode : VersionCode,link : link});
})



app.listen(port,() => {
    console.log("App started at port number : " + port);
})