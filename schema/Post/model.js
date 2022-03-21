const db = require('../../db/connection')
const Sequelize = require('sequelize')

const post = db.define('post',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
    status:{
        type: Sequelize.STRING
    },
    userId:{
        type: Sequelize.INTEGER,
        references:"users",
        referencesKey:"id"
    }
})
module.exports = post;