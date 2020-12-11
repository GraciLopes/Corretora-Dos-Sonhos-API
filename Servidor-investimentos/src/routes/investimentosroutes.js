const express = require("express")
const router = express.Router()
const controller = require("../controller/investimentoscontroller")

//@route GET /investimentos 
//@query ou params --- não foi utilizado
//@desc Retornar todos os investimentos
//@access public
//@endpoint http://localhost:3030/investimentos
router.get("/", controller.getAll)

//@route POST /criar 
//@query ou params --- não foi utilizado
//@desc Criar um novo investimento
//@access public
//@endpoint http://localhost:3030/investimentos/criar
router.post("/criar", controller.addInvestimento)

//@route GET /investimentos
//@params nome
//@desc Retornar todos os investimentos
//@access public
//@endpoint http://localhost:3030/investimentos/nome/
router.get("/nome/:nome", controller.getByName)

//@route GET /id 
//@params id
//@desc Retorna o investimento por id
//@access public
//@endpoint http://localhost:3030/investimentos/id/
router.get("/id/:id", controller.getById)

//@route DELETE /deletar 
//@query id
//@desc Exclui um telefone por id especifico
//@access public
//@endpoint http://localhost:3030/investimentos/deletar?_id=
//http://localhost:3030/investimentos/deletar?_id=5fd3ef6316dc64112431eb9f
router.delete("/deletar", controller.deleteById)

//@route PUT /atualizar 
//@query id
//@desc Atualiza completamente o investimento
//@access public
//@endpoint http://localhost:3030/investimentos
router.put("/atualizar", controller.investimentoUpdate)

module.exports = router
