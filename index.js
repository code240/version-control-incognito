const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 9000;

const app = express();

const link = "msg.incognito.gq"; 
const appLink = "https://msg.incognito.gq";
const VersionCode = "jehdjwe1";
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