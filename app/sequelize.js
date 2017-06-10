var Sequelize = require('sequelize'),
    sequelize = new Sequelize('postgres://postgres:root@localhost:5432/test')

module.exports = sequelize