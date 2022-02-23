const req = require('express/lib/request')
const atendimentos = require('../models/receitas')
const Receita = require('../models/receitas')

module.exports = app => {
    app.get('/receitas', (req, res) => {
        Receita.lista(res)
    })

    //lista pela descrição
    app.get('/receitas/:descricao', (req, res) => {
        Receita.lista(res)
    })

    //busca receita ano e mes  /:ano/:mes
    app.post('/receitas/:ano/:mes', (req, res) => {
        const ano = req.params.ano
        const mes = req.params.mes
 
         Receita.adiciona(atendimento, res)
     })



    app.get('/receitas/:id',(req,res) =>{
        const id = parseInt(req.params.id)

        Receita.buscaPorId(id,res)
    
    })

    app.post('/receitas', (req, res) => {
       const atendimento = req.body

        Receita.adiciona(atendimento, res)
    })

    app.patch('/receitas/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Receita.altera(id, valores, res)
    })

    app.delete('/receitas/:id', (req,res)=>{
        const id = parseInt(req.params.id)

        Receita.deleta(id,res)
    })
}