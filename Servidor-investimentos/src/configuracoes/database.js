const mongoose = require("mongoose")
 //criando a url da conexão com o mongo
//const dotenv = require('dotenv')

//dotenv.config()

const DB_URI = /*process.env.DB_URI*/  "mongodb://localhost:27017/Corretora"

const connect = () =>{
    mongoose.connect(DB_URI, {useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true,  //serve para tratar erros que possam ter com as versões do mongo
        useFindAndModify: false})
    const connection = mongoose.connection
    connection.on('error', () => console.error('Erro ao se conectar'))
    connection.once('open', () => console.log('Conectamos no Mongo'))
}

module.exports = { connect }

//Arquivo database.js cria a conexão com o banco de dados MongoDB