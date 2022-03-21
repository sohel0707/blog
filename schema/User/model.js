
const db = require('../../db/connection')
const Sequelize = require('sequelize')

const user = db.define('user',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    }
})

module.exports = user;