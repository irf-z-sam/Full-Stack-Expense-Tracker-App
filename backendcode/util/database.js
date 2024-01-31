const Sequelize = require('sequelize');

const sequelize = new Sequelize("expense-data","root","irfan@786",{
    dialect:"mysql",
    host:"localhost"
});

module.exports = sequelize;