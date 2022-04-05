const Sequelize = require('sequelize')

const instancia = require('../banco/index')

const colunas = {
    uid:{
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    razao:{
        type: Sequelize.STRING,
        allowNull:false
    },
    colaborador:{
        type: Sequelize.STRING,
        allowNull:false,
        fields:'nome_colaborador'
    },
    datacriacao:{
        type:Sequelize.DATE,
        allowNull:false
    },
    categoria:{
        type:Sequelize.STRING,
        allowNull:false
    },
    protocolo:{
        type:Sequelize.STRING,
        allowNull:true
    },
    trello:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descricao:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    status:{
        type:Sequelize.ENUM(['Pendente', 'Em andamento','Concluído']),
        allowNull:true
    },
    datafinalizacao:{
        type:Sequelize.DATE,
        allowNull:false
    }

}
const tarefas = {
    freezeTablename: true,
    tableName: 'tarefas',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('tarefa', colunas, opcoes)