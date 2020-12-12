const express=require("express")
const app=express()
const cors=require("cors")
const db=require('../src/configuracoes/database')
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))

db.connect()

app.use(cors())
app.use(express.json())

const index=require("./routes/index")
const investimentos=require("./routes/investimentosroutes")

app.use("/",index)
app.use("/investimentos",investimentos)

module.exports=app