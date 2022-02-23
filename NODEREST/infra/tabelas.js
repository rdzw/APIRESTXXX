class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
        this.criarDespesas()

    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Receitas (id int NOT NULL AUTO_INCREMENT, descricao varchar(50) NOT NULL,valor float NOT NULL, data datetime NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Receitas criada com sucesso')
            }
        })
    }

    criarDespesas() {
        const sql = 'CREATE TABLE IF NOT EXISTS Despesas (id int NOT NULL AUTO_INCREMENT, descricao varchar(50) NOT NULL,valor float NOT NULL, data datetime NOT NULL,PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Despesas criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas

