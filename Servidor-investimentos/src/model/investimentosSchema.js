const mongoose=require('mongoose')
const Schema=mongoose.Schema

const investimentoSchema=new Schema({

_id: {
    type: mongoose.Schema.Types.ObjectId, //tipo de dado dentro do mongoose de ID
    auto: true,
    required: true,
},

nome:{ // nome = nome da renda fixa 
    type:String,
    required: true
},
preOuPosfixado:{
    type:String,
    required: true
},
rentabilidade: {
    type:String,
    required: false
},
aplicacaoMinima:{
    type:String,
    required: false
},
cobertoPeloFGC:{
    type:String,
    required: false
},
sugestaoDeAplicacao:{
    type:String,
    required: false
},
corretora: {
    type: String,
    required:false
}
})

const investimentoCollections=mongoose.model('investimento',investimentoSchema)

module.exports=investimentoCollections