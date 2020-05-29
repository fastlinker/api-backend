const Sequelize = require('sequelize')
const db = require('../models/index')

module.exports = db.sequelize.define(
  'admin',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullname: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  },{
    freezeTableName: true,
  }
  )
