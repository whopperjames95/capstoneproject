const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();




app.use(express.static(path.join(__dirname,"../client")))


app.use(express.json());
app.use(cors());




const {createLead, getDetailPrice} = require('./controller.js')



app.post(`/api/userInfo`, createLead)

app.get(`/api/detailPrices/:button`, getDetailPrice)








const port = process.env.PORT|| 5000

app.listen(port, () => 
    console.log(`Listening on ${port}`))