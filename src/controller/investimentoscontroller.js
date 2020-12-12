const model = require("../model/investimentosSchema")

//getAll retorna todos os investimentos
const getAll = (req, res) => {
    console.log(req.url)
    model.find((error, investimentos) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).json({
                mensagem: "Melhores investimentos em renda fixa:",
                investimentos
            })
        }
    })
}

//getByName retorna o investimento por nome

const getByName = (req, res) => {
    const investimentoParam = req.params.nome
    model.findOne({ "nome": investimentoParam }, (error, investimentos) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            if (investimentos) {
                return res.status(200).send(investimentos)
            } else {
                return res.status(404).send("Investimento não encontrado")
            }
        }

    })

}



//getById retorna o investimento por id especifico

const getById = (req, res) => {
    const idParam = req.params.id //buscando pelo id na url
    model.findById(idParam, (error, investimentos) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            if (investimentos) {
                return res.status(200).send(investimentos)
            } else {
                return res.status(404).send("Investimento não encontrado")
            }
        }
    })
}

//addInvestimento cria um novo investimento

const addInvestimento = (req, res) => {
    const investimentoDoBody = req.body // coleta o body que o usuario digitou
    const investimento = new model(investimentoDoBody) //cria um novo investimento com o body

    investimento.save((error) => { //essa função salva o que o usuario digitou 
        if (error) {
            return res.status(400).send(error)
        } else {
            return res.status(200).send({
                mensagem: "Novo investimento criado com sucesso em nosso banco de dados.",
                investimento
            })
        }
    })
}

//deleteById exclui um contato por id especifico

const deleteById = (req, res) => {
    const idParam = req.query
    model.findByIdAndDelete(idParam, (error, investimento) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            if (investimento) {
                return res.status(200).send("Investimento excluído do nosso banco de dados.")
            } else {
                return res.sendStatus(404)
            }
        }
    })
}

//contatoUpdate atualiza todos os dados do contato 

const investimentoUpdate = (req, res) => {
    const idParam = req.query
    const bodyDoInvestimento = req.body
    const update = { new: true }

    model.findByIdAndUpdate(
        idParam,
        bodyDoInvestimento,
        update,
        (error, investimentos) => {
            if (error) {
                return res.status(500).send({
                    mensagem: "Infelizmente não foi possível atualizar o investimento existente.",
                    error
                })
            } else {
                return res.status(200).send({
                    mensagem: "Investimento atualizado com sucesso!",
                    investimentos
                })
            }
        })
}

module.exports = {
    getAll,
    addInvestimento,
    getByName,
    getById,
    investimentoUpdate,
    deleteById    
}