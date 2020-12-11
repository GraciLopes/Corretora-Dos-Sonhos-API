const mongoose=require("mongoose")
const Schema=mongoose.Schema

const investimentoSchema=new Schema({
    
tipoRendaFixa:{
    type:String,
    required: true
},
preOuPosfixado:{
    type:String,
    required: true
},
rentabilidade: {
    type:String,
    required: true
},
aplicacaoMinima:{
    type:String,
    required: true
},
cobertoPeloFGC:{
    type:String,
    required: true
},
sugestaoDeAplicacao:{
    type:String,
    required: true
},
corretora: {
    type: String,
    required:true
}
})

const investimentoCollections=mongoose.model('investimento',investimentoSchema)

module.exports=investimentoCollections