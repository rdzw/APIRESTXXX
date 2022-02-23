const req = require('express/lib/request')
const atendimentos = require('../models/despesas')
const Despesas = require('../models/despesas')


module.exports = app => {
    app.get('/despesas', (req, res) => {
        Despesas.lista(res)
    })
//lista pela descrição
    app.get('/despesas/:descricao', (req, res) => {
        Despesas.lista(res)
    })

    app.get('/despesas/:id',(req,res) =>{
        const id = parseInt(req.params.id)

        Despesas.buscaPorId(id,res)
    
    })


    app.post('/despesas', (req, res) => {
       const atendimento = req.body

        Despesas.adiciona(atendimento, res)
    })

    app.patch('/despesas/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Despesas.altera(id, valores, res)
    })

    app.delete('/despesas/:id', (req,res)=>{
        const id = parseInt(req.params.id)

        Despesas.deleta(id,res)
    })
}