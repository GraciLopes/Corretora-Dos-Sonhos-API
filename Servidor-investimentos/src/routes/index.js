const express=require("express")
const router=express.Router()

router.get("/",function(req,res){
    res.status(200).send({
        CorretoraDosSonhos:"Recomendações de investimentos em Renda Fixa, ao lado da construção da sua história! ",
        MasoQueeRendaFixa: "Renda fixa é um termo que se refere a qualquer tipo de investimento que possui regras de remuneração definidas no momento da aplicação no título. Essas regras estipulam o prazo e a forma que a remuneração será calculada e paga ao investidor.",
        VantagenseBeneficios: "Vantagens e benefícios de investir: É seguro e rende mais que a Poupança, você pode prever os seus ganhos e escolher de acordo com os seus objetivos de vida, com oportunidade de ganhos mais estáveis, perfeito para quem está iniciando no mundo dos investimentos!",
        Version:"1.0.0"
    })
})

module.exports=router