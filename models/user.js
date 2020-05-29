const Sequelize = require('sequelize')
const db = require('../models/index')

module.exports = db.sequelize.define(
  'user',
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
    account: {
      type: Sequelize.INTEGER
    },
    location: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.INTEGER
    },
    password: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  },{
    freezeTableName: true,
  }
  )
