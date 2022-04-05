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
    criado:{
        type:Sequelize.DATE,
        allowNull:false
    }
}