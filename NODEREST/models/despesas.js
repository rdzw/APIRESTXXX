const moment = require('moment')
const conexao = require('../infra/conexao')

class Despesas {
    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        //const clienteEhValido = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
         //   {
               // nome: 'cliente',
               // valido: clienteEhValido,
               // mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            //}
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros) {
            res.status(400).json(erros)
        } else {
            const atendimentoDatado = {...atendimento, data}

            const sql = 'INSERT INTO Despesas SET ?'
    
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(atendimento)
                }
            })
        }
       
    }
    lista(res){
        const sql = 'SELECT * FROM Despesas'

        conexao.query(sql, (erro,resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }

        })
    }

    buscaPorId(id,res){
        const sql = `SELECT * FROM Despesas WHERE id=${id}`

        conexao.query(sql, (erro, resultados) =>{
            const atendimento = resultados[0];
            if(erro){

                res.status(400).json(erro)

            }else{
                res.status(200).json(atendimento)
            }
        })

    }

    altera(id, valores, res) {
        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }      
        const sql = 'UPDATE Despesas SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })

    }

        deleta(id,res){
            const sql = 'DELETE FROM Despesas WHERE id=?'

            conexao.query(sql,id,(erro,resultados)=>{
                if(erro){
                    res.status(400).json(erro)
                }else{
                    res.status(200).json({id})
                }
            })
        }

    
    }

module.exports = new Despesas